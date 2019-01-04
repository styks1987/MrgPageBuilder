<script type="text/template" id="AtAGlance">
	<div class="input_wrapper at_a_glance">
		<div class="row">
            <div class="col-sm-12"><h2>Three Column Specialized Stats</h2></div>

        </div>
        <div class="row">
            <div>Example Output</div>
            <img style="width: 100%" src="/mrg_page_builder/img/at_a_glance.png" alt="preview icon clolums" />
        </div>
        <div class="row">
            <div class="col-sm-4"><h4>Section Title</h4></div>
            <div class="col-sm-8">
                <input class="editable section_heading form-control" name="section_heading" value="<%= section_heading %>" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-12"><h4>Column 1</h4></div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number form-control" name="col1_big_number" value="<%= col1_big_number %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Title</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number_title form-control" name="col1_big_number_title" value="<%= col1_big_number_title %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Text</strong></div>
                    <div class="col-sm-12">
                        <textarea width=100% name="col1_big_number_text" class="editable form-control" ><%= col1_big_number_text %></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number 2</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number2 form-control" name="col1_big_number2" value="<%= col1_big_number2 %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Title 2</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number_title2 form-control" name="col1_big_number_title2" value="<%= col1_big_number_title2 %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number 3</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number3 form-control" name="col1_big_number3" value="<%= col1_big_number3 %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Title 3</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col1_big_number_title3 form-control" name="col1_big_number_title3" value="<%= col1_big_number_title3 %>" />
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-12"><h4>Column 2</h4></div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col2_big_number form-control" name="col2_big_number" value="<%= col2_big_number %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Title</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col2_big_number_title form-control" name="col2_big_number_title" value="<%= col2_big_number_title %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Paragraph</strong></div>
                    <div class="col-sm-12">
                        <textarea width=100% name="col2_paragraph" class="editable form-control" ><%= col2_paragraph %></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Footer</strong></div>
                    <div class="col-sm-12">
                        <textarea width=100% name="col2_footer" class="editable form-control" ><%= col2_footer %></textarea>
                    </div>
                </div>

            </div>

            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-12"><h4>Column 3</h4></div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col3_big_number form-control" name="col3_big_number" value="<%= col3_big_number %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Title</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col3_big_number_title form-control" name="col3_big_number_title" value="<%= col3_big_number_title %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Big Number Text</strong></div>
                    <div class="col-sm-12">
                        <textarea width=100% name="col3_big_number_text" class="editable form-control" ><%= col3_big_number_text %></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Call to Action Link</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col3_cta_text form-control" name="col3_cta_text" value="<%= col3_cta_text %>" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><strong>Call to Action URL</strong></div>
                    <div class="col-sm-12">
                        <input class="editable col3_cta_url form-control" name="col3_cta_url" value="<%= col3_cta_url %>" />
                    </div>
                </div>

            </div>
        </div>


		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_at_glance">Insert Into Page</a></div>
		</div>
	</div>
</script>

<script type="text/template" id="FooterSliderImage">
    <hr />
    <div class="image_form">
        <div clas="row">
            <div class="image_region"></div>
        </div>
    </div>
</script>

<script type="text/template" id="AtAGlanceOutput">
    <div class="at_a_glance block" data-block_type="at_a_glance">
        <textarea style="display: none;" name="model" ><%= model_json %></textarea>
        <div class="at_a_glance">
            <div class="container">
                <h2><%= section_heading %></h2>
                <div class="carousel">
                    <ul>
                        <li>
                            <div class="row">
                                <div class="col-sm-6">
                                    <h3 class="lg"><%= col1_big_number %></h3>
                                    <p class="caption lg"><%= col1_big_number_title %></p>
                                    <p><%= col1_big_number_text %></p>
                                </div>
                                <div class="col-sm-6">
                                    <h3><%= col1_big_number2 %></h3>
                                    <p class="caption"><%= col1_big_number_title2 %></p>
                                    <h3><%= col1_big_number3 %></h3>
                                    <p class="caption"><%= col1_big_number_title3 %></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="sports_teams">
                                        <h3 class="green"><%= col2_big_number %></h3>
                                        <p class="caption"><%= col2_big_number_title %></p>
                                    </div>
                                    <div class="quote">
                                        <div class="txt"><%= col2_paragraph %></div>
                                        <div class="source"><%= col2_footer %></div>
                                    </div>
                                </div>
                                <!--
                                <div class="col-sm-6">
                                    <p class="caption" style="padding-top: 40px;">Piedmont College is a school where you find out who you are.</p>
                                </div> -->
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <!-- <div class="col-sm-6">
                                         <h3 class="sm">$20,730</h3>
                                         <p class="caption">Annual Tuition &amp; Fees</p>
                                         <br />
                                     </div> -->
                                <div class="col-sm-6">
                                    <h3 class="xl"><%= col3_big_number %></h3>
                                    <p class="caption cap"><%= col3_big_number_title %></p>
                                    <p class="xl"><%= col3_big_number_text %></p>
                                    <br />
                                    <a href="<%= col3_cta_url %>" class="btn btn-primary"><%= col3_cta_text %></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="carousel_ctrl">
                    <a href="#" class="prev">Back</a>
                    <a href="#" class="next">Next</a>
                </div>
            </div>
        </div>
    </div>
</script>

