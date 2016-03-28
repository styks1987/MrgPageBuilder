<script type="text/template" id="Video">
	<div class="input_wrapper video">
		<div class="row">
			<div class="col-sm-6">
				<h2>Video</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<label>Youtube URL</label>
				<input class="form-control editable" type="textarea" name="youtube_url" value="<%= youtube_url %>" />
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
	<div class="video container block" data-block_type="video">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<%
		var url = youtube_url;
		var myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
		var videoID = url.match(myregexp)[1];
		%>
		<div class="player" style="position:relative;padding-top:56.25%;">
			<iframe src="https://www.youtube.com/embed/<%= videoID %>" frameborder="0" allowfullscreen style="position:absolute;left:0;top:0;height:100%;width:100%;"></iframe>
		</div>
	</div>
</script>
