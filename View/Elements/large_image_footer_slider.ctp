<script type="text/template" id="LargeImageFooterSlider">
	<div class="input_wrapper stats">
		<div class="row">
            <div class="col-sm-12"><h2>Hero Image w/ Footer Slider</h2></div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div>Example Output</div>
                <img style="width: 100%" src="/mrg_page_builder/img/large_image_footer_slider.png" alt="preview icon clolums" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Section Background Image</label>
                <div id="section_background"></div>
            </div>
            <div class="col-sm-6">
                    <label>Section Title</label>
                    <input class="section_heading form-control" name="section_heading" value="<%= section_heading %>" />
                    <label>Section Subtitle</label>
                    <input class="section_subheading form-control" name="section_subheading" value="<%= section_subheading %>" />
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Link</label>
                        <input class="section_link form-control" name="section_link" value="<%= section_link %>" />
                    </div>
                    <div class="col-sm-6">
                        <label>Call to Action</label>
                        <input class="section_cta form-control" name="section_cta" value="<%= section_cta %>" />
                    </div>
                </div>
            </div>
        <div class="row">
            <div class="col-sm-12">
                <h2>Slider Images</h2>
                <div>Images should be at least 640x427</div>
            </div>
        </div>
        <div id="images_region"></div>
        <div style="clear:both; width:100%"></div>
        <div class="row" style="margin-top:20px">
            <div class="col-sm-12">
                <a class="btn btn-primary add_image" href="javascript:void(0)">Add Image to Slider</a>
            </div>
        </div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_large_image_footer_slider">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="FooterSliderImage">
    <div class="image_form"  style=" width: 32%; float:left;">
        <div clas="row">
            <div class="col-sm-12">
                <a href="javascript:void(0)" class="delete_slider_image">Delete Slide</a>
                <div class="image_region"></div>
            </div>
        </div>
    </div>
</script>

<script type="text/template" id="LargeImageFooterSliderOutput">
    <div class="large_image_footer_slider block" data-block_type="large_image_footer_slider">
        <textarea style="display: none;" name="model" ><%= model_json %></textarea>
        <div class="hero topography">
            <div class="bg" style="background-image: url(<%= section_background %>)"></div>
            <div class="cont">
                <div class="container text-center">
                    <h2><%= section_heading %></h2>
                    <p class="marker"><%= section_subheading %></p>
                    <a href="<%= section_link %>" class="btn btn-primary brown"><%= section_cta %></a>
                </div>
            </div>
        </div>
        <div class="gallery">
            <div class="carousel">
                <ul>
                    <% _.each(images, function (image) { %>
                    <li><img src="<%= image.background_image %>" alt="Students walking past a snowy tree on campus." /></li>
                    <% }) %>
                </ul>
            </div>
            <div class="carousel_ctrl">
                <a href="#" class="prev">Back</a>
                <a href="#" class="next">Next</a>
            </div>
        </div>
    </div>
</script>

