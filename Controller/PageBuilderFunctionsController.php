<?php
	class PageBuilderFunctionsController extends AppController{

		function upload(){
			if (!empty($_FILES)) {

				$target_directory = APP.WEBROOT_DIR.$_POST['directory'];
				// clean up the filename
				$target_filename = time() . preg_replace("/[^A-Za-z0-9\.\-_]/", '', str_replace(' ', '_', $_FILES['file']['name']));

				$target_resource = $target_directory.'/'.$target_filename;


				if (!is_dir($target_directory)) {
					mkdir($target_directory, 0777, true);
				}

				move_uploaded_file($_FILES['file']['tmp_name'], $target_resource);

				chmod($target_resource, 0777);

				$_FILES['file']['target_directory'] = $target_directory;
				$_FILES['file']['target_filename'] = $target_filename;
				$_FILES['file']['download_link'] = $target_resource;

				$_FILES['file']['status'] = 1;

				echo json_encode($_FILES['file']);
			} else {
				echo json_encode(array('status'=>0, 'error'=>'Upload Error. File could be too large.'));
			}
			exit;
		}
	}

?>
