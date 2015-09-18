<script type="text/template" id="HomeRotator">
	<div class="input_wrapper homeRotator">
		<div class="row">
			<div class="col-sm-6"><h2>Home Page Rotating Featured Image</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_image" href="javascript:void(0)">Add Image</a></h2></div>
		</div>
		<div class="row">
			<div class="col-sm-4"><h4>Section Title</h4></div>
			<div class="col-sm-8">
				<input class="section_heading form-control" name="section_heading" value="<%= section_heading %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4"><h4>Section Subtitle</h4></div>
			<div class="col-sm-8">
				<input class="section_subheading form-control" name="section_subheading" value="<%= section_subheading %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4"><h4>Link</h4></div>
			<div class="col-sm-8">
				<input class="section_link form-control" name="section_link" value="<%= section_link %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4"><h4>Call to Action</h4></div>
			<div class="col-sm-8">
				<input class="section_cta form-control" name="section_cta" value="<%= section_cta %>" />
			</div>
		</div>
		<div id="images_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_image">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="HomeImage">
		<hr />
		<div class="image_form">
			<div clas="row">
				<div class="image_region"></div>
			</div>
		</div>
	</script>

<script type="text/template" id="OutputHomeRotator">
	<div class="home_rotator home main hero block" data-block_type="home_rotator">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="bg rotate-bg"></div>
		<div class="cont">
			<div class="container">
				<h1><%= section_heading %></h1>
				<p><%= section_subheading %></p>
				<a href="<%= section_link %>" class="btn btn-primary"><%= section_cta %></a>
			</div>
		</div>
		<div class="home_rotator_region row"></div>
	</div>
</script>
