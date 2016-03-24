<script type="text/template" id="Video">
	<div class="input_wrapper video">
		<div class="row">
			<div class="col-sm-6">
				<h2>Video</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<label>Embed Code</label>
				<input class="form-control editable" type="text" name="embed_code" value="<%= embed_code %>" />
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<a href="javascript:void(0)" class="btn btn-primary insert_video">Insert Into Page</a>
			</div>
		</div>
	</div>
</script>

<script type="text/template" id="VideoOutput">
	<div class="hero main future_students block" data-block_type="video">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="player">
			<%= embed_code %>
		</div>
	</div>
</script>
