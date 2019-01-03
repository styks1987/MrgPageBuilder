<script type="text/template" id="News">
	<div class="input_wrapper stats">
		<div class="row"><div class="col-sm-12"><h2>News</h2></div></div>
        <div class="row">
            <div>Example Output</div>
            <img style="width: 100%" src="/mrg_page_builder/img/news.png" alt="preview icon clolums" />
        </div>
		<div class="row">
			<div class="col-sm-12">This block will output from your news feed</div>
		</div>
		<div class="row">
			<div class="col-sm-6"><a href="javascript:void(0)" class="btn btn-primary insert_news">Insert Into Page</a></div>
		</div>
	</div>
</script>



<script type="text/template" id="NewsOutput">
    <div class="news block" data-block_type="news">
        <textarea style="display: none;" name="model" ><%= model_json %></textarea>
        <div class="container">
            <div class="carousel">
                <ul class="news-contents-container">
                    Loading News...
                </ul>
            </div>
            <div class="news_carousel_ctrl">
                <a href="javascript:void(0)" class="prev">Back</a>
                <a href="javascript:void(0)" class="next">Next</a>
            </div>
        </div>
        <div class="NewsItemTemplate" style="display:none">
            <li>
                <h2 class="title"></h2>
                <p class="description" style="overflow: hidden"></p>
                <a class="btn btn-primary link" href="#">Read Full Story</a>
            </li>
        </div>
    </div>
</script>
