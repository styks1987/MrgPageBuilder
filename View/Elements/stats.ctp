<script type="text/template" id="Stats">
	<div class="input_wrapper stats">
		<div class="row"><div class="col-sm-12"><h2>Statistics</h2></div></div>
		<div class="row">
			<div class="col-sm-6"><label>Header </label></div>
			<div class="col-sm-6"><input class="editable form-control"  type="text" name="header" value="<%= header %>" /></div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Paragraph</label></div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<button data-tag="createLink" class="btn btn-primary add_link">Add Link</button>
				<div style="padding:10px; margin-top:10px;" contenteditable="true" data-linked-input="paragraph"><%= paragraph %></div>
				<textarea style="visibility: hidden;" width=100% name="paragraph" class="editable form-control" contenteditable="true" ><%= paragraph %></textarea>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Call to Action 1</label></div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<label>CTA 1 Text</label>
				<input class="form-control editable" type="text" name="cta_1_text" value="<%= cta_1_text %>" />
			</div>
			<div class="col-sm-6">
				<label>CTA 1 URL</label>
				<input class="form-control editable" type="text" name="cta_1_link" value="<%= cta_1_link %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Call to Action 2</label></div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<label>CTA 2 Text</label>
				<input class="form-control editable" type="text" name="cta_2_text" value="<%= cta_2_text %>" />
			</div>
			<div class="col-sm-6">
				<label>CTA 2 URL</label>
				<input class="form-control editable" type="text" name="cta_2_link" value="<%= cta_2_link %>" />
			</div>
		</div>

		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_paragraph">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="StatsOutput">
	<div class="stats container block" data-block_type="stats">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="row text-center">
			<div class="col-sm-4 col-md-4">
					<p class="statistic"><%= stat_1 %></h2>
					<p class="header"><%= stat_1_header %></p>
					<p class="detail"><%= stat_1_detail %></p>
			</div>
			<div class="col-sm-4 col-md-4">
					<p class="statistic"><%= stat_2 %></h2>
					<p class="header"><%= stat_2_header %></p>
					<p class="detail"><%= stat_2_detail %></p>
			</div>
			<div class="col-sm-4 col-md-4">
					<p class="statistic"><%= stat_3 %></h2>
					<p class="header"><%= stat_3_header %></p>
					<p class="detail"><%= stat_3_detail %></p>
			</div>
	</div>
</script>
