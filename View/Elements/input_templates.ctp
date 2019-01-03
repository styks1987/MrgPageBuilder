
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
			<option value="stats">Statistics</option>
            <option value="columns">Three Column Content</option>
            <option value="icon_columns">Icon Columns</option>
			<option value="home_rotator">Featured Image Rotator</option>
            <option value="video">Video</option>
            <option value="news">News</option>
		</select>
		<a href="javascript:void(0)" class="glyphicon glyphicon-remove close"></a>
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
<?php echo $this->element('MrgPageBuilder.stats'); ?>
<?php echo $this->element('MrgPageBuilder.columns'); ?>
<?php echo $this->element('MrgPageBuilder.icon_columns'); ?>
<?php echo $this->element('MrgPageBuilder.home_rotator'); ?>
<?php echo $this->element('MrgPageBuilder.video'); ?>
<?php echo $this->element('MrgPageBuilder.news'); ?>
