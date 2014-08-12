<script type="text/template" id="Quote">
	<div class="input_wrapper quote">
		<div class="row"><div class="col-sm-12"><h2>Quote</h2></div></div>
		<div class="row">
			<div class="col-sm-6"><label>Full Name</label></div>
			<div class="col-sm-6"><input class="editable form-control"  type="text" name="quote_name" value="<%= quote_name %>" /></div>
		</div>
		<div class="row">
			<div class="col-sm-6"><label>Quote</label></div>
			<div class="col-sm-6"><textarea width=100% name="quote_text" class="editable form-control" ><%= quote_text %></textarea></div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_quote">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="QuoteOutput">
	<div class="testimonial block" data-block_type="quote">
		<div class="container">
			<div class="txt field" data-type="text">&quot;<%= quote_text %>&quot;</div>
			<div class="source field" data-type="varchar">&mdash; <%= quote_name %></div>
		</div>
	</div>
</script>
