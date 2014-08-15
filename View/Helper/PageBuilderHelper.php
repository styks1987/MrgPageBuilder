<?php
	App::uses('FormHelper', 'View/Helper');

	class PageBuilderHelper extends FormHelper{


		function input($fieldName, $options = [], $model = 'Node', $data = []){

			echo $this->Html->css('MrgPageBuilder.page_builder_styles');

			//$this->Html->script('MrgPageBuilder.require', ['inline'=>false]);
			$this->Html->script('MrgPageBuilder.jquery.filedrop', ['inline'=>false]);
			$this->Html->script('MrgPageBuilder.jquery.jcarousel.min', ['inline'=>false]);
			$this->Html->script('vendor/stacktrace', ['inline'=>false]);
			$this->Html->script('MrgPageBuilder.PageBuilderBackboneApp', ['inline'=>false]);


			$output = '';

			$output .= $this->Html->row([
					[
						'col-md-12 editor_region_outer',
						$this->Html->div('editor_region',
											$this->Html->div('', '', ['id'=>'block_chooser_region']).
											$this->Html->div('', '', ['id'=>'input_region'])
										)


					]
				]).
				$this->Html->row([
					[
						'col-md-12',
						$this->Html->div('', '', ['id'=>'html_region'])
					]
				]);

			$options = ['type'=>'textarea', 'type'=>'hidden', 'name'=>'data['.$model.']['.$fieldName.']', 'value'=>$data[$model][$fieldName]];
			$output .= parent::input($fieldName, $options);
			return $output;
		}
	}
?>
