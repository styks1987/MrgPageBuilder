<script type="text/template" id="Slides">
	<div class="input_wrapper slide">
		<div class="row">
			<div class="col-sm-6"><h2>Slides</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_slide" href="javascript:void(0)">Add Slide</a></h2></div>
		</div>
		<div id="slide_image_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_slides">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="SlideImage">
		<hr />
		<div class="slide_form">
			<div class="row">
				<div class="col-sm-4"><label>Image Top Left Caption</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="caption" value="<%= caption %>" /></div>
				<div class="col-sm-2"><a href="javascript:void(0)" class="delete_slide glyphicon glyphicon-trash" /></div>
			</div>

			<div class="row">
				<div class="col-sm-4"><label>Overlay Title</label></div>
				<div class="col-sm-8"><input class="form-control editable" type="text" name="overlay_title" value="<%= overlay_title %>" /></div>
			</div>

			<div class="row">
				<div class="col-sm-12"><label>Overlay Text</label></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><textarea class="form-control editable" name="overlay_text" ><%= overlay_text %></textarea></div>
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
					<label>Image Alt</label>
					<input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" />
				</div>
			</div>
		</div>

		<div class="image_region"></div>
	</script>

<script type="text/template" id="OutputSlides">
	<div class="highlights block slides" data-block_type="slides">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="carousel" data-jcarousel="true">
			<ul class="slider_images_region"></ul>
		</div>
		<div class="carousel_ctrl">
			<a href="#" class="prev" data-jcarouselcontrol="true">Back</a>
			<a href="#" class="next" data-jcarouselcontrol="true">Next</a>
		</div>
		<div class="carousel_pagination" data-jcarouselpagination="true">
			<% for(i=1; i<= image_count; i++) {%>
				<a href="#<%= i %>"><%= i %></a>
			<% } %>
		</div>
	</div>
</script>

	<script type="text/template" id="OutputSlideImage">
		<div class="pic"><img src="<%= background_image %>" alt="<%= img_alt %>"></div>
		<div class="caption"><%= caption %></div>
		<div class="cont">
			<% if(overlay_title != '') { %>
				<h3><%= overlay_title %></h3>
			<% } %>
			<% if(overlay_text != '') { %>
				<p><%= overlay_text %></p>
			<% } %>
			<% if(cta_text != ''){ %>
				<a href="<%= cta_link %>" class="btn btn-primary"><%= cta_text %></a>
			<% } %>
		</div>
	</script>

