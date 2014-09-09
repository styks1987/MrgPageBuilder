<script type="text/template" id="Featured">
	<div class="input_wrapper featured">
		<div class="row">
			<div class="col-sm-6">
				<h2>Featured</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<label>Header</label>
				<input class="form-control editable" type="text" name="header" value="<%= header %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<label>Subheading</label>
				<textarea class="form-control editable" name="subheader"><%= subheader %></textarea>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h3>Call to Action</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<label>CTA Text</label>
				<input class="form-control editable" type="text" name="cta_text" value="<%= cta_text %>" />
			</div>
			<div class="col-sm-6">
				<label>CTA URL</label>
				<input class="form-control editable" type="text" name="cta_link" value="<%= cta_link %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="image_region"></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<a href="javascript:void(0)" class="btn btn-primary insert_featured">Insert Into Page</a>
			</div>
		</div>
	</div>
</script>
	<script type="text/template" id="FeaturedImage">
		<div class="input_wrapper">
			<% if(background_image){ %>
				<div class="row">
					<div class="col-sm-10">
						<img width="100%" src="<%= background_image %>" />
					</div>
					<div class="col-sm-2">
						<a href="javascript:void(0" class="glyphicon glyphicon-trash delete_image"></a>
					</div>
				</div>
			<% }else{ %>
				<div class="row">
					<div class="col-sm-12">
						<input type="file" id="upload_button_<%= cid %>" name="background_image" />
						<div id="dropbox_<%= cid %>" class="dropbox">
							<div class="message"><img src="/mrg_page_builder/img/upload_files.jpg">Click here or Drop your image here.</div>
						</div>
					</div>
				</div>
			<% } %>
		</div>
	</script>

<script type="text/template" id="FeaturedOutput">
	<div class="hero main future_students block" data-block_type="featured">
		<input type='hidden' name="model" value='<%= model_json %>' />
		<div class="bg" style="background-image:url(<%= background_image %>);"></div>
		<div class="cont">
			<div class="container">
				<h1 data-name="header"><%= header %></h1>
				<p data-name="subheader"><%= subheader %></p>
				<a data-name="cta" href="<%= cta_link %>" class="btn btn-primary"><%= cta_text %></a>
			</div>
		</div>
	</div>
</script>
