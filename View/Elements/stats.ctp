<script type="text/template" id="Stats">
	<div class="input_wrapper stats">
		<div class="row"><div class="col-sm-12"><h2>Statistics</h2></div></div>
		<div class="row">
			<div class="col-sm-12"><label>Statistic Column 1</label></div>
			<div class="row">
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_1" value="<%= stat_1 %>" /></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_1_header" value="<%= stat_1_header %>" /></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><input class="form-control editable" type="text" name="stat_1_detail" value="<%= stat_1_detail %>" /></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Statistic Column 2</label></div>
			<div class="row">
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_2" value="<%= stat_2 %>" /></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_2_header" value="<%= stat_2_header %>" /></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><input class="form-control editable" type="text" name="stat_2_detail" value="<%= stat_2_detail %>" /></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12"><label>Statistic Column 3</label></div>
			<div class="row">
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_3" value="<%= stat_3 %>" /></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="stat_3_header" value="<%= stat_3_header %>" /></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><input class="form-control editable" type="text" name="stat_3_detail" value="<%= stat_3_detail %>" /></div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_statistics">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="StatsOutput">
	<div class="stats block" data-block_type="stats">
		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-md-4">
					<div class="stat-inner">
						<p class="stat"><%= stat_1 %></h2>
						<p class="stat-header"><%= stat_1_header %></p>
						<p class="stat-detail"><%= stat_1_detail %></p>
					</div>
				</div>
				<div class="col-sm-4 col-md-4">
					<div class="stat-inner">
						<p class="stat"><%= stat_2 %></h2>
						<p class="stat-header"><%= stat_2_header %></p>
						<p class="stat-detail"><%= stat_2_detail %></p>
					</div>
				</div>
				<div class="col-sm-4 col-md-4">
					<div class="stat-inner">
						<p class="stat"><%= stat_3 %></h2>
						<p class="stat-header"><%= stat_3_header %></p>
						<p class="stat-detail"><%= stat_3_detail %></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</script>
