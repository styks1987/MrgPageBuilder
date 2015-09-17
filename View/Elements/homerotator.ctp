<script type="text/template" id="HomeRotator">
	<div class="input_wrapper homeRotator">
		<div class="row">
			<div class="col-sm-6"><h2>Home Page Rotating Featured Image</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_image" href="javascript:void(0)">Add Column</a></h2></div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<h2>Section Title</h2>
				<p>This appears above the images. Leave this blank if you dont want this section to have a title</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<input class="section_heading form-control" name="section_heading" value="<%= section_heading %>" />
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
			<div class="row">
				<div class="col-sm-4"><label>Column Header</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="header" value="<%= header %>" /></div>
				<div class="col-sm-2"><a href="javascript:void(0)" class="delete_image glyphicon glyphicon-trash" /></div>
			</div>
			<div class="row">
				<div class="col-sm-4"><label>Image Alt</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" /></div>
			</div>
			<div clas="row">
				<div class="image_region"></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><label>Column Teaser</label></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><textarea class="form-control editable" name="paragraph" ><%= paragraph %></textarea></div>
			</div>
			<div class="row">
				<div class="col-sm-4"><label>Column Link</label></div>
				<div class="col-sm-8">
					<input class="form-control editable" type="text" name="section_link" value="<%= section_link %>" />
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4"><label>Column Call to Action</label></div>
				<div class="col-sm-8">
					<input class="form-control editable" type="text" name="col_cta" value="<%= col_cta %>" />
				</div>
			</div>

			<div class="row">
				

			</div>
		</div>
	</script>

<script type="text/template" id="OutputHomeRotator">
	<div class="homeRotator container block" data-block_type="homeRotator">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="homeRotator_region row"></div>
	</div>
</script>

	<script type="text/template" id="OutputHomeImage">
		<a href="<%= section_link %>"><img width="100%" src="<%= background_image %>" alt="<%= img_alt %>"></a>
		<div class="header"><a href="<%= section_link %>"><%= header %></a></div>
		<div class="cont">
			<p><%= paragraph %></p>
		</div>
		<div class="col-cta">
			<a href="<%= section_link %>" class="btn btn-primary"><%= col_cta %> &raquo;</a>
		</div>
	</script>
