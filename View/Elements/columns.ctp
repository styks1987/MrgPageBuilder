<script type="text/template" id="Columns">
	<div class="input_wrapper columns">
		<div class="row">
			<div class="col-sm-12"><h2>Three Column Content</h2></div>
		</div>
		<div class="row"><div class="col-sm-12"><h3>Column 1</h3></div></div>
		<div class="row">
			<div class="col-sm-6"><label>Header</label></div>
			<div class="col-sm-6"><input class="form-control editable"  type="text" name="col_1_header" value="<%= col_1_header %>" /></div>
			<div class="col-sm-6"><label>Teaser</label></div>
			<div class="col-sm-6"><input class="form-control editable"  type="text" name="col_1_detail" value="<%= col_1_detail %>" /></div>
			<div class="col-sm-6"><label>Call to Action Link</label></div>
			<div class="col-sm-6"><input class="form-control editable"  type="text" name="col_1_link" value="<%= col_1_link %>" /></div>
			<div class="col-sm-6"><label>Call to Action Text</label></div>
			<div class="col-sm-6"><input class="form-control editable"  type="text" name="col_1_link_text" value="<%= col_1_link_text %>" /></div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<label>Image Alt Text</label>
				<input class="form-control editable" type="text" name="col_1_image_alt_text" value="<%= col_1_image_alt_text %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="image_region"></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_columns">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="ColumnsOutput">
	<div class="columns block" data-block_type="columns">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-md-4">
					<div class="column-inner">
						<img class="column-img" src="<%= background_image %>" alt="<%= col_1_image_alt_text %>">
						<p class="column-header"><%= col_1_header %></p>
						<p class="stat-detail"><%= col_1_detail %></p>
						<a class="col-cta" href="<%= col_1_link %>"><%= col_1_link_text %></a>
					</div>
				</div>
				<div class="col-sm-4 col-md-4">
					<div class="column-inner">
						<img class="column-img" src="<%= col_image_2 %>" alt="<%= col_image_2_alt_text %>">
						<p class="column-header"><%= col_2_header %></p>
						<p class="stat-detail"><%= col_2_detail %></p>
						<a class="col-cta" href="<%= col_2_link %>"><%= col_2_link_text %></a>
					</div>
				</div>
				<div class="col-sm-4 col-md-4">
					<div class="column-inner">
						<img class="column-img" src="<%= col_image_3 %>" alt="<%= col_image_3_alt_text %>">
						<p class="column-header"><%= col_3_header %></p>
						<p class="stat-detail"><%= col_3_detail %></p>
						<a class="col-cta" href="<%= col_3_link %>"><%= col_3_link_text %></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</script>
