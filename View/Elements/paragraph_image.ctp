<script type="text/template" id="ParagraphImage">
	<div class="input_wrapper paragraph_image">
		<div class="row"><div class="col-sm-12"><h2>Paragraph w/ Image</h2></div></div>
		<div class="row">
			<div class="col-sm-6"><label>Header</label></div>
			<div class="col-sm-6"><input class="editable form-control editable"  type="text" name="header" value="<%= header %>" /></div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Paragraph</label></div>
		</div>
		<div class="row">
			<div class="col-sm-12"><textarea width=100% name="paragraph" class="editable form-control" ><%= paragraph %></textarea></div>
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
			<div class="col-sm-6">
				<label>Image Alt Text</label>
				<input class="form-control editable" type="text" name="image_alt_text" value="<%= image_alt_text %>" />
			</div>
			<div class="col-sm-6">
				<label>Image Link</label>
				<input class="form-control editable" type="text" name="image_link" value="<%= image_link %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<label>Image Position</label>
				<select class="form-control editable" name="image_position">
					<option>-- Choose an Image Position --</option>
					<option value="left">Left</option>
					<option value="right">Right</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="image_region"></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_paragraph_image">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="ParagraphImageOutput">
	<div class="paragraph_image container block" data-block_type="paragraph_image">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="row">
			<% if(image_position == 'left'){ %>
				<div class="col-sm-6 col-md-6"><a href="<%= image_link %>"><img src="<%= background_image %>" alt="<%= image_alt_text %>"></a></div>
				<div class="col-sm-6 col-md-6">
					<h2><%= header %></h2>
					<p><%= paragraph %></p>
					<a href="<%= cta_link %>" class="btn btn-primary"><%= cta_text %> &raquo;</a>
				</div>
			<% }else{ %>
				<div class="col-sm-6 col-md-6">
					<h2><%= header %></h2>
					<p><%= paragraph %></p>
					<a href="<%= cta_link %>" class="btn btn-primary"><%= cta_text %> &raquo;</a>
				</div>
				<div class="col-sm-6 col-md-6"><a href="<%= image_link %>"><img src="<%= background_image %>" alt="<%= image_alt_text %>"></a></div>
			<% } %>
		</div>
	</div>
</script>
