<script type="text/template" id="FullWidthSection">
	<div class="input_wrapper full_width_section">
		<div class="row">
			<div class="col-sm-12">
				<h2>Full Width Section</h2>
			</div>
		</div>
        <div class="row">
            <div>Example Output</div>
            <img style="width: 100%" src="/mrg_page_builder/img/full_width_section.png" alt="preview icon clolums" />
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
                <div>Images should be sized 960x640</div>
				<div class="image_region"></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<a href="javascript:void(0)" class="btn btn-primary insert_full_width_section">Insert Into Page</a>
			</div>
		</div>
	</div>
</script>
	<script type="text/template" id="FullWidthSectionImage">
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

<script type="text/template" id="FullWidthSectionOutput">
	<div class="block full_width_section" data-block_type="full_width_section">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
        <div class="hero faculty_staff">
            <div class="bg" style="background-image:url(<%= background_image %>);"></div>
            <div class="cont">
                <div class="container text-center">
                    <h2><%= header %></h2>
                    <p class="marker"><%= subheader %></p>
                    <a href="<%= cta_link %>" class="btn btn-primary"><%= cta_text %></a>
                </div>
            </div>
        </div>
	</div>
</script>
