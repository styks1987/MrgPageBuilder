<script type="text/template" id="FourGridImages">
	<div class="input_wrapper four_grid_images">
		<div class="row">
			<div class="col-sm-12"><h2>Grid Images</h2></div>
		</div>
        <div class="row">
            <div>Example Output</div>
            <img style="width: 100%" src="/mrg_page_builder/img/four_grid_images.png" alt="preview icon clolums" />
        </div>

		<div class="row">
			<div class="col-sm-4">
				<label>Section Title</label>
			</div>
			<div class="col-sm-8">
				<input class="section_heading form-control" name="section_heading" value="<%= section_heading %>" />
			</div>
		</div>
        <div class="row">
            <div class="col-sm-4">
                <label>Section Paragraph</label>
            </div>
            <div class="col-sm-8">
                <textarea width=100% name="section_paragraph" class="section_paragraph editable form-control" ><%= section_paragraph %></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Section Call To Action</label>
                <input class="section_cta form-control" name="section_cta" value="<%= section_cta %>" />
            </div>
            <div class="col-sm-6">
                <label>Section CTA Link</label>
                <input class="section_cta_link form-control" name="section_cta_link" value="<%= section_cta_link %>" />
            </div>
        </div>
        <h3 style="margin-top:20px">Grid Images</h3>
		<div id="four_grid_image_region"></div>
        <div><h2><a class="btn btn-primary add_image" href="javascript:void(0)">Add Image</a></h2></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_four_grid">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="FourGridImage">
    <div class="four_grid_form">
        <div class="row">
            <div class="col-sm-5">
                <div class="four_grid_image_region"></div>
            </div>
            <div class="col-sm-7">
            <div class="row">
                <div class="col-sm-12">
                    <label>Image Title <a href="javascript:void(0)" class="delete_grid glyphicon glyphicon-trash" /></label>
                    <input class="form-control editable" type="text" name="header" value="<%= header %>" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <label>Image Link</label>
                    <input class="form-control editable" type="text" name="section_link" value="<%= section_link %>" />
                </div>
                <div class="col-sm-6">
                    <label>Image Alt</label>
                    <input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" />
                </div>
            </div>
        </div>
    </div>

</script>



<script type="text/template" id="FourGridImagesOutput">
	<div class="four_grid_images block choose_your_path" data-block_type="four_grid_images">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
        <div class="container text-center">
            <h2><%= section_heading %></h2>
            <p><%= section_paragraph %></p>
            <br />
            <div class="four_grid_images_region row"></div>
            <a href="<%= section_cta_link %>" class="btn btn-primary"><%= section_cta %></a>
        </div>
	</div>
</script>

	<script type="text/template" id="FourGridImageOutput">
        <a href="<%= section_link %>" class="programs" ><img src="<%= background_image %>" alt="<%= img_alt %>"/>
        <div class="caption"><%= header %></div></a>
	</script>
