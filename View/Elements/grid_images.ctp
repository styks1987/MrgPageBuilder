<script type="text/template" id="GridImages">
	<div class="input_wrapper grid">
		<div class="row">
			<div class="col-sm-6"><h2>Grid Images</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_image" href="javascript:void(0)">Add Image</a></h2></div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<h2>Section Title</h2>
				<p>This appears above the images. Leave this blank if you don't want this section to have a title</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<input class="section_heading form-control" name="section_heading" value="<%= section_heading %>" />
			</div>
		</div>
		<div id="grid_image_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_grid">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="GridImage">
		<hr />
		<div class="grid_form">
			<div class="row">
				<div class="col-sm-4"><label>Header</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="header" value="<%= header %>" /></div>
				<div class="col-sm-2"><a href="javascript:void(0)" class="delete_grid glyphicon glyphicon-trash" /></div>
			</div>
			<div class="row">
				<div class="col-sm-4"><label>Section Link</label></div>
				<div class="col-sm-8">
					<input class="form-control editable" type="text" name="section_link" value="<%= section_link %>" />
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12"><label>Paragraph</label></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><textarea class="form-control editable" name="paragraph" ><%= paragraph %></textarea></div>
			</div>

			<div class="row">
				<div class="col-sm-6">
					<label>Image Alt</label>
					<input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" />
				</div>

			</div>
		</div>

		<div class="grid_image_region"></div>
	</script>

<script type="text/template" id="OutputGridImages">
	<div class="grid_images block program" data-block_type="grid_images">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<h3><%= section_heading %></h3>
		<div class="grid_images_region row"></div>
	</div>
</script>

	<script type="text/template" id="OutputGridImage">
		<div class="pic"><a href="<%= section_link %>"><img width="100%" src="<%= background_image %>" alt="<%= img_alt %>"></a></div>
		<div class="header"><a href="<%= section_link %>"><%= header %></a></div>
		<div class="cont">
			<p><%= paragraph %></p>
		</div>
	</script>
