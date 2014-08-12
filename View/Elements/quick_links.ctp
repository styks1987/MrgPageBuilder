<script type="text/template" id="QuickLinkColumns">
	<div class="input_wrapper quick_links">
		<div class="row">
			<div class="col-sm-6"><h2>Quick Links</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_column" href="javascript:void(0)">Add Column</a></h2></div>
		</div>
		<div id="column_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_quick_links">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="QuickLinkColumn">
		<hr />
		<div class="row">
			<div class="col-sm-4"><label>Column Name</label></div>
			<div class="col-sm-6"><input class="form-control" type="text" name="name" value="<%= name %>" /></div>
			<div class="col-sm-2"><a href="javascript:void(0)" class="delete_column glyphicon glyphicon-trash" /></div>
		</div>

		<table class="links_region"></table>
	</script>

		<script type="text/template" id="QuickLinks">
			<tr>
				<th>Link Text</th>
				<th>URL</th>
				<th>&nbsp;</th>
			</tr>

			<tr><td colspan=2><a class="btn btn-primary add_link" href="javascript:void(0)">Add link</a></td></tr>
		</script>

			<script type="text/template" id="QuickLink">
				<td><input class="form-control" type="text" name="text" value="<%= text %>" /></td>
				<td><input class="form-control" type="text" name="url" value="<%= url %>" /></td>
				<td><a href="javascript:void(0)" class="delete_link glyphicon glyphicon-trash"></a></td>
			</script>


<script type="text/template" id="OutputQuickLinkColumns">
	<div class="quick_links block" data-block_type="quick_links">
		<div class="container">
			<h1>Quick Links</h1>
			<div class="row">
				<div class="col-md-6" id="output_column_region_1"></div>
				<div class="col-md-6" id="output_column_region_2"></div>
			</div>
		</div>
	</div>
</script>

	<script type="text/template" id="OutputQuickLinkColumn">
			<div class="cont output_links_region">
				<h2><%= name %></h2>
			</div>
	</script>

		<script type="text/template" id="OutputQuickLinks">
			<!-- Empty on purpose -->
		</script>

			<script type="text/template" id="OutputQuickLink">
				<a href="<%= url %>"><%= text %></a>
			</script>
