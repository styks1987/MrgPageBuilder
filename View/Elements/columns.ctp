<script type="text/template" id="Columns">
	<div class="input_wrapper columns">
		<div class="row">
			<div class="col-sm-6"><h2>Three Column Content</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_column" href="javascript:void(0)">Add Column</a></h2></div>
		</div>
		<div id="column_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_column">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="SingleColumn">
		<hr />
		<div class="column_form">
			<div class="row">
				<div class="col-sm-4"><label>Column Header</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="header" value="<%= header %>" /></div>
				<div class="col-sm-2"><a href="javascript:void(0)" class="delete_column glyphicon glyphicon-trash" /></div>
			</div>
			<div clas="row">
				<div class="col-sm-6">
					<label>Image Alt</label>
					<input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" />
				</div>
				<div class="column_image_region"></div>
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

<script type="text/template" id="OutputColumns">
	<div class="columns block" data-block_type="columns">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="columns_region row"></div>
	</div>
</script>

	<script type="text/template" id="OutputSingleColumn">
		<a href="<%= section_link %>"><img width="100%" src="<%= background_image %>" alt="<%= img_alt %>"></a>
		<div class="header"><a href="<%= section_link %>"><%= header %></a></div>
		<div class="cont">
			<p><%= paragraph %></p>
		</div>
		<div class="col-cta">
			<a href="<%= section_link %>" class="col-cta-button"><%= col_cta %></a>
		</div>
	</script>
