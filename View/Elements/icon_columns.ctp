<script type="text/template" id="IconColumns">
	<div class="input_wrapper icon_columns">
		<div class="row">
			<div class="col-sm-6"><h2>Icon Columns</h2></div>
			<div class="col-sm-6"><h2><a class="btn btn-primary add_icon_column" href="javascript:void(0)">Add Column</a></h2></div>
		</div>
        <div class="row">
            <div>Example Output</div>
            <img style="width: 100%" src="/mrg_page_builder/img/icon_columns.png" alt="preview icon clolums" />
        </div>
		<div id="icon_columns_region"></div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_icon_column">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="SingleIconColumn">
		<hr />
		<div class="icon_column_form">
			<div class="row">
				<div class="col-sm-4"><label>Column Header</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="header" value="<%= header %>" /></div>
				<div class="col-sm-2"><a href="javascript:void(0)" class="delete_icon_column glyphicon glyphicon-trash" /></div>
			</div>
			<div class="row">
				<div class="col-sm-4"><label>Icon Alt</label></div>
				<div class="col-sm-6"><input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" /></div>
			</div>
			<div clas="row">
				<div class="icon_column_image_region" style="max-width: 350px"></div>
			</div>
			<div class="row">
				<div class="col-sm-12"><label>Column Text</label></div>
			</div>
            <div class="row">
                <div class="col-sm-12"><textarea class="form-control editable" name="paragraph" ><%= paragraph %></textarea></div>
            </div>
            <div class="row">
                <div class="col-sm-4"><label>Icon Link (include https://)</label></div>
                <div class="col-sm-8">
                    <input class="form-control editable" type="text" name="section_link" value="<%= section_link %>" />
                </div>
            </div>

		</div>
	</script>

<script type="text/template" id="OutputIconColumns">
    <div class="icon_columns container block discover_explore_find" data-block_type="icon_columns">
        <div class="row text-center">
    		<textarea style="display: none;" name="model" ><%= model_json %></textarea>
	    	<div class="icon_columns_region row"></div>
        </div>
	</div>
</script>

	<script type="text/template" id="OutputSingleIconColumn">
        <a href="<%= section_link %>">
            <h2><%= header %></h2>
            <p><%= paragraph %></p>
        </a>
	</script>
