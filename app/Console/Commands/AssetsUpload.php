<?php
 
namespace App\Console\Commands;
 
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
 
class AssetsUpload extends Command
{
    protected static $files = [
        '/public/css/*',
        '/public/js/*',
        '/public/mix-manifest.json'
    ];
 
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:upload' .
        ' {--D|disk=production : Which disk to upload to/}';
 
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Uploads assets to a server';
 
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
 
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        if (!$disk_name = $this->option('disk', 'production')) {
            return $this->error('Plese specify the disk to upload to.');
        }
 
        $disk = Storage::disk($disk_name);
 
        $asset_files = [];
 
        foreach (static::$files as $pattern) {
            $files = File::glob( base_path() . $pattern);
 
            $potential_dirs = $files;
            foreach ($potential_dirs as $file) {
                if (is_dir($file)) {
                    $files = array_merge($files, static::recursiveGetFiles($file));
                }
            }
 
            $asset_files = array_merge($asset_files, array_map(function($file) {
                return ltrim(substr($file, strlen(base_path())), '/\\');
            }, $files));
        }
 
        $nr_uploaded = 0;
 
        foreach ($asset_files as $file) {
            if (is_dir(base_path($file))) {
                continue;
            }
 
            if ($disk->missing($file) || $disk->lastModified($file) < filemtime(base_path($file))) {
                $nr_uploaded++;
                $this->info('Uploading file '.$file);
                $disk->putFileAs(dirname($file), new \Illuminate\Http\File(base_path($file)), basename($file));
            } else {
                $this->comment('File '.$file.' not changed');
            }
        }
 
        $this->info('Upload finished. '.$nr_uploaded.' files uploaded');
 
        return 0;
    }
 
    protected static function recursiveGetFiles($dir)
    {
        $files = [];
 
        $contents = scandir($dir);
 
        foreach ($contents as $file) {
            if ($file == '.' || $file == '..') continue;
 
            if (is_dir($dir . '/' . $file)) {
                $files = array_merge($files, static::recursiveGetFiles($dir . '/' . $file));
            } else {
                $files[] = $dir . '/' . $file;
            }
        }
 
        return $files;
    }
}
