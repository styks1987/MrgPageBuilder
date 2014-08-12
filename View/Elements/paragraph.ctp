<script type="text/template" id="Paragraph">
	<div class="input_wrapper paragraph">
		<div class="row"><div class="col-sm-12"><h2>Paragraph</h2></div></div>
		<div class="row">
			<div class="col-sm-6"><label>Header</label></div>
			<div class="col-sm-6"><input class="editable form-control"  type="text" name="header" value="<%= header %>" /></div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Paragraph</label></div>
		</div>
		<div class="row">
			<div class="col-sm-12"><textarea width=100% name="paragraph" class="editable form-control" ><%= paragraph %></textarea></div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_paragraph">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="ParagraphOutput">
	<div class="paragraph container block" data-block_type="paragraph">
		<h1><%= header %></h1>
		<p class="intro"><%= paragraph %></p>
	</div>
</script>

