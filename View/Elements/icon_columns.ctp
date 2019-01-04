<script type="text/template" id="IconColumns">
	<div class="input_wrapper icon_columns">
		<div class="row">
			<div class="col-sm-12"><h2>Icon Columns</h2></div>
		</div>
        <div class="row">
            <div class="col-sm-12">
                <div>Example Output</div>
                <img style="width: 100%" src="/mrg_page_builder/img/icon_columns.png" alt="preview icon clolums" />
            </div>
        </div>
		<div id="icon_columns_region"></div>
        <div class="row">
            <div class="col-sm-12">
                <a class="btn btn-primary add_icon_column" href="javascript:void(0)">Add Column</a>
            </div>
        </div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_icon_column">Insert Into Page</a></div>
		</div>
	</div>
</script>

	<script type="text/template" id="SingleIconColumn">
		<hr />
		<div class="icon_column_form">
            <div class="row">
                <div class="col-sm-5">
                    <label>Icon</label>
                    <div class="icon_column_image_region"></div>
                </div>
                <div class="col-sm-7">
                    <div class="row">
                        <div class="col-sm-12">
                            <label>Column Header <a href="javascript:void(0)" class="delete_icon_column glyphicon glyphicon-trash" /></label>
                            <input class="form-control editable" type="text" name="header" value="<%= header %>" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <label>Icon Alt</label>
                            <input class="form-control editable" type="text" name="img_alt" value="<%= img_alt %>" />
                        </div>
                        <div class="col-sm-6">
                            <label>Icon Link</label>
                            <input class="form-control editable" type="text" name="section_link" value="<%= section_link %>" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label>Column Text</label>
                            <textarea class="form-control editable" name="paragraph" ><%= paragraph %></textarea>
                        </div>
                    </div>
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
