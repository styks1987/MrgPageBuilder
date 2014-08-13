
<script type="text/template" id="Editor">
	<div class="block_chooser">
		<h3>Blocks</h3>
		<p>Choose the block you wish to insert</p>
		<select name="block" class="module">
			<option>--</option>
			<option value="quick_links">Quick Links</option>
			<option value="quote">Quote</option>
			<option value="featured">Featured</option>
			<option value="paragraph">Paragraph</option>
			<option value="paragraph_image">Paragraph w/ Image</option>
			<option value="slides">Slider</option>
			<option value="grid_images">Image Grid</option>
		</select>
	</div>
	<div id="background_overlay"></div>

</script>

<?php echo $this->element('MrgPageBuilder.output_region', ['data'=>$data, 'model'=>$model, 'fieldName'=>$fieldName]); ?>

<?php echo $this->element('MrgPageBuilder.grid_images'); ?>
<?php echo $this->element('MrgPageBuilder.slider'); ?>
<?php echo $this->element('MrgPageBuilder.paragraph_image'); ?>
<?php echo $this->element('MrgPageBuilder.paragraph'); ?>
<?php echo $this->element('MrgPageBuilder.featured'); ?>
<?php echo $this->element('MrgPageBuilder.quote'); ?>
<?php echo $this->element('MrgPageBuilder.quick_links'); ?>


