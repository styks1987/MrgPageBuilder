$(document).ready(function(){


B = {}
B.Save = {}
B.Editor = {}
B.Output = {}
B.Save.Model = {}



B.Editor.Model = Backbone.Model.extend({})
B.Editor.Collection = Backbone.Collection.extend({});

B.Output.Model = Backbone.Model.extend({});
B.Output.Collection = Backbone.Collection.extend({});
B.Output.View = {}


B.Save.Model = Backbone.Model.extend({
	save : function () {
		$('#description').val($.trim($('#output_region').html()));
	}
})

B.Editor.View = Backbone.View.extend({
	events : {
		'change .module' : 'choose_module',
		'click .close' : 'close_view',
	},
	template : _.template($('#Editor').html()),
	render : function () {
		this.$el.html(this.template());
	},
	// function used by most views to update their models
	update_model: function (e) {
		column = $(e.currentTarget).attr('name');
		value = $(e.currentTarget).val();
		this.model.set(column, value);
	},
	choose_module : function (e) {
		value = $(e.currentTarget).val();
		this.show_module(value);
	},
	set_module : function (value, data) {
		this.$el.find('.module option[value="'+value+'"]').prop('selected', true);
		this.delegateEvents();
		this.show_module(value,data);
	},
	show_module : function (value, data) {
		switch(value){
			case 'quick_links':
				if (typeof quickLinkColumnsView == 'undefined') {
					quickLinkColumn = new B.Editor.Model.QuickLinkColumn();
					quickLinkColumnList = new B.Editor.Collection.QuickLinkColumns({model:quickLinkColumn});
					quickLinkColumnsView = new B.Editor.View.QuickLinkColumns({collection:quickLinkColumnList, el:'#input_region'});
				}else{
					quickLinkColumnsView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					quickLinkColumnList.reset(data);
				}
				quickLinkColumnsView.render();
				break;
			case 'slides':
				if (typeof slidesView == 'undefined') {
					slidesCollection = new B.Editor.Collection.Slides();
					slidesView = new B.Editor.View.Slides({collection:slidesCollection, el:'#input_region'});
				}else{
					slidesView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					slidesCollection.reset(data);
				}
				slidesView.render();
				break;
			case 'quote':
				if (typeof quoteView == 'undefined') {
					quoteModel = new B.Editor.Model.Quote();
					quoteView = new B.Editor.View.Quote({model:quoteModel, el:'#input_region'});
				}else{
					quoteView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					quoteModel.set(data);
				}
				quoteView.render();
				break;
			case 'featured':
				if (typeof featuredView == 'undefined') {
					featuredModel = new B.Editor.Model.Featured();
					featuredView = new B.Editor.View.Featured({model:featuredModel, el:'#input_region'});
				}else{
					featuredView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					featuredModel.set(data);
				}
				featuredView.render();
				break;
			case 'paragraph':
				if (typeof paragraphView == 'undefined') {
					paragraphModel = new B.Editor.Model.Paragraph();
					paragraphView = new B.Editor.View.Paragraph({model:paragraphModel, el:'#input_region'});
				}else{
					paragraphView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					paragraphModel.set(data);
				}
				paragraphView.render();
				break;
			case 'stats':
				if (typeof statsView == 'undefined') {
					statsModel = new B.Editor.Model.Stats();
					statsView = new B.Editor.View.Stats({model:statsModel, el:'#input_region'});
				}else{
					statsView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					statsModel.set(data);
				}
				statsView.render();
				break;
			case 'paragraph_image':
				if (typeof paragraphImageView == 'undefined') {
					paragraphImageModel = new B.Editor.Model.ParagraphImage();
					paragraphImageView = new B.Editor.View.ParagraphImage({model:paragraphImageModel, el:'#input_region'});
				}else{
					paragraphImageView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					paragraphImageModel.set(data);
				}
				paragraphImageView.render();
				break;
			case 'columns':
				if (typeof columnsView == 'undefined') {
					columnsCollection = new B.Editor.Collection.Columns();
					columnsView = new B.Editor.View.Columns({collection:columnsCollection, el:'#input_region'});
				}else{
					columnsView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					columnsCollection.reset(data);
				}
				columnsView.render();
				break;
			case 'grid_images':
				if (typeof gridImagesView == 'undefined') {
					gridImagesCollection = new B.Editor.Collection.GridImages();
					gridImagesView = new B.Editor.View.GridImages({collection:gridImagesCollection, el:'#input_region'});
				}else{
					gridImagesView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					gridImagesCollection.reset(data);
				}
				gridImagesView.render();
				break;
		}
	},
	close_view : function (){
		if (confirm('Are you sure you want to close this view without saving it?')) {
			this.$el.empty();
			$('#input_region').empty();
		}
	},


	// Save the data for later if the file ever needs to be edited
	save_view_model : function (model) {
		delete model.attributes.model_json;
		try {
			this.test_json_encode_decode(model.attributes);
			json_string = JSON.stringify(model.attributes);
			JSON.parse(json_string);
			model.set('model_json', json_string);
			error = 0;
		} catch(e) {
			error = 1;
			alert('There was an error while saving your data. Please check that you have not copied and pasted illegal characters into the text box. If this persists, do not close this page and contact us. Please send us the following output. '+json_string);
		}
		return (error)?false:true;
	},
	// When the user finishes and wants to insert it into the page
	render_to_preview: function (html) {
		editorView.trigger('finished_editing', html);
		editorView.$el.empty();
		// Empties the view that called it
		this.$el.empty();
	},
	test_json_encode_decode : function (json){
		json_string = JSON.stringify(json);
		return JSON.parse(json_string);
	},
	handle_paste : function (e) {
		e.preventDefault();
		var text = e.originalEvent.clipboardData.getData("text/plain");
		document.execCommand("insertHTML", false, text);
	},
	print_stack_trace : function (e) {
		return printStackTrace({e:e});
	}
});

B.Output.View = Backbone.View.extend({
	template : _.template($('#OutputRegionView').html()),
	render : function () {
		this.$el.empty();
		this.$el.html(this.template());
		this.enable_editing();
	},
	enable_editing : function () {
		// Enable inserting content at a specific point
		this.show_dropzones();
		// Enabled editing an existing piece of content
	},
	show_dropzones : function () {
		outputToolbarView = new B.Output.View.Toolbar();
		outputToolbarView.show_dropzones();
	},
	scroll_to : function(el, offset){
		if (typeof offset == 'undefined') {
			offset = 0;
		}
		if (typeof el != 'undefined') {
			offset = el.offset().top - offset
			$('html,body').animate({ scrollTop: offset});
		}
	},
	print_stack_trace : function (e) {
		return printStackTrace({e:e});
	}
});

	B.Output.View.Toolbar = B.Output.View.extend({
		className:'output_toolbar_wrapper',
		events : {
			'click a.insert_content' : 'show_editor',
			'click a.edit_content' : 'edit_content',
			'click a.delete_content' : 'delete_content',
			'click a.move_up' : 'move_up',
			'click a.move_down' : 'move_down',
		},
		template : _.template($('#OutputToolbar').html()),
		render : function () {
			this.$el.html(this.template());
			this.delegateEvents();
			return this.$el;
		},
		save : function () {
			model = new B.Save.Model()
			this.hide_dropzones();
			model.save();
			this.show_dropzones();
		},
		show_editor : function(e){
			editorView.render();
			this.scroll_to(editorView.$el);
			this.insert_location = $(e.currentTarget).closest('.output_toolbar_wrapper');
			this.listenToOnce(editorView, 'finished_editing', this.insert_html);
		},
		show_dropzones : function () {
			if ($('.block').is('*')) {
				this.hide_dropzones();
				$(this.render()).insertBefore('.block');
			}else{
				$('#output_region').html('<div class="output_toolbar_wrapper"><a class="btn btn-primary insert_content" href="javascript:void(0)">Insert Content</a></div>');
				$('#output_region a.insert_content').click(function(e){
					this.show_editor(e);

				}.bind(this))
			}
		},
		hide_dropzones : function () {
			$('.output_toolbar_wrapper').remove();
		},
		// Insert the HTML into the page
		insert_html : function (preview_html){
			this.$el.empty();
			if (this.is_edit) {
				// if we are editing we want to
				// replace instead of append
				$(this.current_block).remove();
				$(this.insert_location).after(preview_html);
			}else{
				if ($(this.insert_location).next('.block').is('*')) {
					$(this.insert_location).next('.block').after(preview_html);
					this.scroll_to($(this.insert_location).next('.block').next());
				}else{
					$(this.insert_location).before(preview_html);
					this.scroll_to($('#html_region'));
				}

			}
			this.save();
		},
		edit_content : function (e){
			this.is_edit = true;
			// Needs to replace existing content
			this.current_block = $(e.currentTarget).closest('.output_toolbar_wrapper').next('.block');
			block_type = $(this.current_block).data('block_type');
			try {
				json_string = $(this.current_block).find('[name="model"]').val();
				data = JSON.parse(json_string);

				delete data.model_json;
				this.show_editor(e);
				editorView.set_module(block_type, data);
			} catch(e) {
				stack = this.print_stack_trace(e);
				alert('It seems the data has become corrupted. It usually can be recovered. You can recreate this view and then delete it or send us this string and the page you were editing. '+"\n\n"+json_string+"\n\n"+stack);
			}


		},
		delete_content : function (e) {
			if (confirm('Are you sure you want to delete this section? This cannot be undone.')) {
				$(e.currentTarget).closest('.output_toolbar_wrapper').next('.block').remove();
				$(e.currentTarget).closest('.output_toolbar_wrapper').remove();
				this.save();
			}
		},
		move_up : function (e) {
			toolbar = $(e.currentTarget).closest('.output_toolbar_wrapper');
			block = toolbar.next();
			new_position = toolbar.prev().prev();
			if ($(new_position).is('*')) {
				block.insertBefore(new_position);
				toolbar.insertBefore(block);
				this.scroll_to(toolbar);
				this.save();
			}else{
				alert('This block cannot move any higher');
			}
		},
		move_down : function (e) {
			toolbar = $(e.currentTarget).closest('.output_toolbar_wrapper');
			block = toolbar.next();
			new_position = toolbar.next().next().next();
			if ($(new_position).is('*')) {
				block.insertAfter(new_position);
				toolbar.insertBefore(block);
				this.scroll_to(toolbar);
				this.save();
			}else{
				alert('This block cannot move any lower');
			}

		}

	})

// BEGIN Image and PARAGRAPH
B.Editor.Model.ParagraphImage = B.Editor.Model.extend({defaults: {header:'Headline', paragraph:'An example paragraph', image_link:'', image_alt_text:'', cta_text:'CTA Text', cta_link:'CTA link', background_image:''}});
B.Output.Model.ParagraphImage = B.Output.Model.extend();

B.Editor.View.ParagraphImage = B.Editor.View.extend({
	events : {
		'click a.insert_paragraph_image' : 'render_paragraph_image_output',
		'keyup .paragraph_image input.editable' : 'update_model',
		'keyup .paragraph_image textarea.editable' : 'update_model',
		'change .paragraph_image select.editable' : 'update_model',
		'paste .paragraph_image .editable' : 'handle_paste',
	},
	template : _.template($('#ParagraphImage').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes));
		featuredImageView = new B.Editor.View.FeaturedImageView({model:this.model, el:'.image_region'});
		featuredImageView.render();
	},
	render_paragraph_image_output : function () {
		if(this.save_view_model(paragraphImageModel)){
			paragraphImageModelOutput = new B.Output.Model.ParagraphImage();
			paragraphImageModelOutput.set(paragraphImageModel.toJSON());
			paragraphImageModelViewOutput = new B.Output.View.ParagraphImage({model:paragraphImageModelOutput});
			this.render_to_preview(paragraphImageModelViewOutput.render().html());
		}
	}
});

B.Output.View.ParagraphImage = B.Output.View.extend({
	initialize:function(){},
	template : _.template($('#ParagraphImageOutput').html()),
	render:function () {
		return this.$el.html(this.template(this.model.attributes))
	}
})

// END TEXT and PARAGRAPH



// BEGIN TEXT and PARAGRAPH
B.Editor.Model.Paragraph = B.Editor.Model.extend({defaults:{header:'Headline', paragraph:'An example paragraph', cta_1_text:'',cta_1_link:'',cta_2_text:'',cta_2_link:''}});
B.Output.Model.Paragraph = B.Output.Model.extend();

B.Editor.View.Paragraph = B.Editor.View.extend({
	events : {
		'click a.insert_paragraph' : 'render_paragraph_output',
		'input [data-linked-input]' : 'update_linked_input',
		'focus [data-linked-input]' : 'enable_link',
		'blur [data-linked-input]' : 'disable_link',
		'mousedown .add_link' : 'add_link',
		'mousedown .remove_link' : 'remove_link',
		'keyup .paragraph input.editable' : 'update_model',
		'keyup .paragraph textarea.editable' : 'update_model',
		'change .paragraph select.editable' : 'update_model',
		'paste .paragraph .editable' : 'handle_paste',
	},
	template : _.template($('#Paragraph').html()),
	enable_link : function (e){
		this.$el.find('.add_link').show();
	},
	disable_link : function (e){
		this.$el.find('.add_link').hide();
	},
	add_link : function (e) {
		e.preventDefault();
		var link = prompt('Please specify the link. Use "/" to specify urls on the site. Leave blank to remove a link.');
		if(link){
			document.execCommand('createLink', false, link);
		}else{
			document.execCommand('unlink', false, link);
		}
	},
	remove_link : function (e) {

	},
	update_linked_input : function (e) {
		input_name = $(e.target).data('linked-input');
		value = $(e.target).html();
		item = {currentTarget:this.$el.find('[name='+input_name+']')}
		item.currentTarget.val(value)
		this.update_model(item);
	},
	render:function () {
		this.model.set('model_json', JSON.stringify(this.model.toJSON()));
		this.$el.html(this.template(this.model.attributes))
	},
	render_paragraph_output : function () {
		if(this.save_view_model(paragraphModel)){
			paragraphModelOutput = new B.Output.Model.Paragraph();
			paragraphModelOutput.set(paragraphModel.toJSON());
			paragraphModelViewOutput = new B.Output.View.Paragraph({model:paragraphModelOutput});
			this.render_to_preview(paragraphModelViewOutput.render().html());
		}
	}
});

B.Output.View.Paragraph = B.Output.View.extend({
	initialize:function(){},
	template : _.template($('#ParagraphOutput').html()),
	render:function () {
		return this.$el.html(this.template(this.model.attributes))
	}
})

// END TEXT and PARAGRAPH


// BEGIN FEATURED
B.Editor.Model.Featured = B.Editor.Model.extend({defaults:{header:'Headline', subheader:'A specific headline', cta_text:'CTA Text', cta_link:'CTA link', background_image:''}});
B.Output.Model.Featured = B.Output.Model.extend();

B.Editor.View.Featured = B.Editor.View.extend({
	events : {
		'click a.insert_featured' : 'render_featured_output',
		'keyup .featured input.editable' : 'update_model',
		'keyup .featured textarea.editable' : 'update_model',
		'change .featured select.editable' : 'update_model',
		'paste .featured .editable' : 'handle_paste',
	},
	template : _.template($('#Featured').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes))
		featuredImageView = new B.Editor.View.FeaturedImageView({model:this.model, el:'.image_region'});
		featuredImageView.render();
	},
	render_featured_output : function () {
		if(this.save_view_model(featuredModel)){
			featuredModelOutput = new B.Output.Model.Featured();
			featuredModelOutput.set(featuredModel.toJSON());
			featuredModelViewOutput = new B.Output.View.Featured({model:featuredModelOutput});
			this.render_to_preview(featuredModelViewOutput.render().html());
		}
	}
});

	B.Editor.View.FeaturedImageView = B.Editor.View.extend({
		events : {
			'click .delete_image' : 'delete_image'
		},
		initialize : function () {
			editorFeaturedImage = new B.Editor.View.Uploader({allowedfileextensions:['.jpg','.png'],data:{'directory':'/uploads/featured_images'}});
			this.listenTo(editorFeaturedImage, 'finished_upload', this.finished_upload );
		},
		template : _.template($('#FeaturedImage').html()),
		render : function () {
			this.model.attributes.cid = this.model.cid;
			this.$el.html(this.template(this.model.attributes));
			editorFeaturedImage.options.fallback_id = 'upload_button_'+this.model.cid;
			editorFeaturedImage.options.upload_box = '#dropbox_'+this.model.cid;

			editorFeaturedImage.render();
		},
		finished_upload : function (file, response) {
			this.model.set('background_image', '/uploads/featured_images/'+response.target_filename);
			this.render();
		},
		delete_image : function () {
			this.model.set('background_image', null);
			this.render();
		}
	})

B.Output.View.Featured = B.Output.View.extend({
	initialize:function(){},
	template : _.template($('#FeaturedOutput').html()),
	render:function () {
		return this.$el.html(this.template(this.model.attributes))
	}
})
// END FEATURED

// BEGIN QUOTE
B.Editor.Model.Quote = B.Editor.Model.extend({defaults : {quote_name:'', quote_text:''}});
B.Output.Model.Quote = B.Output.Model.extend();

B.Editor.View.Quote = B.Editor.View.extend({
	events : {
		'click a.insert_quote' : 'render_quote_output',
		'keyup .quote input.editable' : 'update_model',
		'keyup .quote textarea.editable' : 'update_model',
		'change .quote select.editable' : 'update_model',
		'paste .quote .editable' : 'handle_paste',
	},
	template : _.template($('#Quote').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes));
	},
	render_quote_output : function () {
		if(this.save_view_model(quoteModel)){
			quoteModelOutput = new B.Output.Model.Quote();
			quoteModelOutput.set(quoteModel.toJSON());
			quoteModelViewOutput = new B.Output.View.Quote({model:quoteModelOutput});
			this.render_to_preview(quoteModelViewOutput.render().html());
		}
	}
});

B.Output.View.Quote = B.Output.View.extend({
	initialize:function(){},
	template : _.template($('#QuoteOutput').html()),
	render:function () {
		return this.$el.html(this.template(this.model.attributes))
	}
})
// END QUOTE

// BEGIN SLIDER

B.Editor.Collection.Slides 	= B.Editor.Collection.extend({});
B.Editor.Model.SlideImage 	= B.Editor.Model.extend();

B.Output.Collection.Slides 	= B.Output.Collection.extend({});
B.Output.Model.SlideImage 	= B.Output.Model.extend({});

	B.Editor.View.Slides = B.Editor.View.extend({
		events : {
			'click a.add_slide' : 'add_slide',
			'click a.insert_slides' : 'render_slides_output',

		},
		template : _.template($('#Slides').html()),
		render : function () {
			this.$el.html(this.template());
			this.add_all();
			this.delegateEvents();
		},
		add_one : function (image) {
			slideImageView = new B.Editor.View.SlideImage({model:image})
			this.$el.find('#slide_image_region').append(slideImageView.render());
			featuredImageView = new B.Editor.View.FeaturedImageView({model:slideImageView.model, el:slideImageView.$el.find('.image_region')});
			featuredImageView.render();
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		},
		add_slide : function () {
			defaults = {background_image:'', img_alt:'', img:'', caption:'', overlay_title:'', overlay_text:'',cta_link:'',cta_text:''};
			slideImageModel = new B.Editor.Model.SlideImage(defaults);
			this.collection.add(slideImageModel);
			this.add_one(slideImageModel);
		},
		render_slides_output : function () {
			if(this.test_json_encode_decode(slidesView.collection.toJSON())){
				slidesCollectionOutput = new B.Output.Collection.Slides();
				slidesCollectionOutput.reset(slidesView.collection.toJSON());
				slidesViewOutput = new B.Output.View.Slides({collection:slidesCollectionOutput});
				this.render_to_preview(slidesViewOutput.render().html());
			}
		}

	});

		B.Editor.View.SlideImage = B.Editor.View.Slides.extend({

			events:{
				'keyup .slide_form input.editable' : 'update_model',
				'keyup .slide_form textarea.editable' : 'update_model',
				'change .slide_form select.editable' : 'update_model',
				'click a.delete_slide' : 'delete_slide',
				'paste .slide_form .editable' : 'handle_paste',
			},
			template : _.template($('#SlideImage').html()),
			render : function () {
				this.$el.html(this.template(this.model.attributes));

				return this.$el
			},
			delete_slide : function () {
				this.model.destroy();
				this.remove();
			}
		})

	B.Output.View.Slides = B.Output.View.extend({
		initialize:function(){},
		template : _.template($('#OutputSlides').html()),
		render : function () {
			this.$el.html(this.template({image_count:this.collection.length, model_json:JSON.stringify(this.collection.toJSON())}));
			this.add_all();
			return this.$el;
		},
		add_one : function (column, index) {
			slideImageViewOutput = new B.Output.View.SlideImage({model:column, tagName:'li'});
			this.$el.find('.slider_images_region').append(slideImageViewOutput.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		}
	});

		B.Output.View.SlideImage = B.Output.View.Slides.extend({
			template : _.template($('#OutputSlideImage').html()),
			render : function () {
				return this.$el.html(this.template(this.model.attributes))
			}
		})


// END SLIDER

// BEGIN COLUMNS
B.Editor.Collection.Columns = B.Editor.Collection.extend({});
B.Editor.Model.Column 		= B.Editor.Model.extend({defaults:function () {return {background_image:"",section_link:"",img_alt:"",header:"",paragraph:"",section_heading:""}}});

B.Output.Collection.Columns = B.Output.Collection.extend({});
B.Output.Model.Column 		= B.Output.Model.extend({});

	B.Editor.View.Columns = B.Editor.View.extend({
		events : {
			'click a.add_column' : 'add_image',
			'click a.insert_column' : 'render_output',
			'keyup input.section_heading' : 'save_section_heading',
			'paste .column .editable' : 'handle_paste',
		},
		template : _.template($('#Columns').html()),
		render : function () {
			this.$el.html(this.template({section_heading:''}));
			this.add_all();
			this.delegateEvents();
		},
		add_one : function (image) {
			var columnsModel = new B.Editor.Model.Column();
			image.set(_.extend(columnsModel.defaults(), image.attributes));
			columnsModel.destroy();

			columnView = new B.Editor.View.Column({model:image})
			this.$el.find('#column_image_region').append(columnView.render());
			featuredImageView = new B.Editor.View.FeaturedImageView({model:columnView.model, el:columnView.$el.find('.column_image_region')});
			featuredImageView.render();
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		},
		add_image : function () {
			if (this.collection.length < 3) {
				defaults = {background_image:'',section_link:'', img_alt:'', header:'', paragraph:'',section_heading:''};
				columnModel = new B.Editor.Model.Column(defaults);
				this.collection.add(columnModel);
				this.add_one(columnModel);
			}else{
				alert('You can add up to 3 column.');
			}
		},
		// to keep from having to make 2 more views
		// Just save this to every model
		save_section_heading : function (e) {
			this.section_heading = $(e.currentTarget).val();
			this.collection.forEach(this.set_model_section_heading, this);
		},
		set_model_section_heading : function (model) {
			model.set('section_heading', this.section_heading);
		},
		render_output : function () {
			if(this.test_json_encode_decode(columnsView.collection.toJSON())){
				columnsCollectionOutput = new B.Output.Collection.Columns();
				columnsCollectionOutput.reset(columnsView.collection.toJSON());
				columnsViewOutput = new B.Output.View.Columns({collection:columnsCollectionOutput});
				this.render_to_preview(columnsViewOutput.render().html());
			}
		}

	});
		B.Editor.View.Column = B.Editor.View.Columns.extend({
			events:{
				'keyup .column_form input.editable' : 'update_model',
				'keyup .column_form textarea.editable' : 'update_model',
				'change .column_form select.editable' : 'update_model',
				'click a.delete_column' : 'delete_column',
			},
			template : _.template($('#Column').html()),
			render : function () {
				this.$el.html(this.template(this.model.attributes));

				return this.$el
			},
			delete_column : function () {
				this.model.destroy();
				this.remove();
			}
		})

	B.Output.View.Columns = B.Output.View.extend({
		initialize:function(){},
		template : _.template($('#OutputColumns').html()),
		render : function () {
			this.section_heading = this.collection.at(0).get('section_heading');
			this.$el.html(this.template({section_heading : this.section_heading, model_json:JSON.stringify(this.collection.toJSON())}));
			this.add_all();
			return this.$el;
		},
		add_one : function (column, index) {
			column_widths = 12 / this.collection.length;


			columnViewOutput = new B.Output.View.Column({model:column, className:'col-sm-'+column_widths});
			this.$el.find('.column_images_region').append(columnViewOutput.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		}
	});

		B.Output.View.Column = B.Output.View.Columns.extend({
			template : _.template($('#OutputColumns').html()),
			render : function () {
				return this.$el.html(this.template(this.model.attributes))
			}
		})
// END COLUMNS

// BEGIN STATISTICS
// defaults: {header:'Headline', paragraph:'An example paragraph', cta_1_text:'',cta_1_link:'',cta_2_text:'',cta_2_link:''}

B.Editor.Model.Stats = B.Editor.Model.extend({defaults:{stat_1:'test', stat_1_header:'some of thei things', stat_1_detail:'all the data', stat_2:'', stat_2_header:'', stat_2_detail:'',stat_3:'', stat_3_header:'', stat_3_detail:'',}});
B.Output.Model.Stats = B.Output.Model.extend();

B.Editor.View.Stats = B.Editor.View.extend({
	events : {
		'click a.insert_statistics' : 'render_statistics_output',
		'keyup .stats input.editable' : 'update_model',
		'keyup .stats textarea.editable' : 'update_model',
		'change .stats select.editable' : 'update_model',
		'paste .stats .editable' : 'handle_paste',
	},
	template : _.template($('#Stats').html()),
	render:function () {
		this.model.set('model_json', JSON.stringify(this.model.toJSON()));
		this.$el.html(this.template(this.model.attributes))
	},
	render_statistics_output : function () {
		if(this.save_view_model(statsModel)){
			statsModelOutput = new B.Output.Model.Stats();
			statsModelOutput.set(statsModel.toJSON());
			statsModelViewOutput = new B.Output.View.Stats({model:statsModelOutput});
			this.render_to_preview(statsModelViewOutput.render().html());
		}
	}
});

B.Output.View.Stats = B.Output.View.extend({
	initialize:function(){},
	template : _.template($('#StatsOutput').html()),
	render:function () {
		return this.$el.html(this.template(this.model.attributes))
	}
})

// END STATISTICS


// BEGIN Paragraph Image Above

B.Editor.Collection.GridImages 	= B.Editor.Collection.extend({});
B.Editor.Model.GridImage 	= B.Editor.Model.extend({defaults:function () {return {background_image:"",section_link:"",img_alt:"",header:"",paragraph:"",section_heading:""}}});

B.Output.Collection.GridImages 	= B.Output.Collection.extend({});
B.Output.Model.GridImage 	= B.Output.Model.extend({});

	B.Editor.View.GridImages = B.Editor.View.extend({
		events : {
			'click a.add_image' : 'add_image',
			'click a.insert_grid' : 'render_output',
			'keyup input.section_heading' : 'save_section_heading',
			'paste .grid .editable' : 'handle_paste',
		},
		template : _.template($('#GridImages').html()),
		render : function () {
			this.$el.html(this.template({section_heading:''}));
			this.add_all();
			this.delegateEvents();
		},
		add_one : function (image) {
			var quickGridImageModel = new B.Editor.Model.GridImage();
			image.set(_.extend(quickGridImageModel.defaults(), image.attributes));
			quickGridImageModel.destroy();

			gridImageView = new B.Editor.View.GridImage({model:image})
			this.$el.find('#grid_image_region').append(gridImageView.render());
			featuredImageView = new B.Editor.View.FeaturedImageView({model:gridImageView.model, el:gridImageView.$el.find('.grid_image_region')});
			featuredImageView.render();
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		},
		add_image : function () {
			if (this.collection.length < 2) {
				defaults = {background_image:'',section_link:'', img_alt:'', header:'', paragraph:'',section_heading:''};
				gridImageModel = new B.Editor.Model.GridImage(defaults);
				this.collection.add(gridImageModel);
				this.add_one(gridImageModel);
			}else{
				alert('You can add up to 2 images. If you want more, just create another grid section.');
			}
		},
		// to keep from having to make 2 more views
		// Just save this to every model
		save_section_heading : function (e) {
			this.section_heading = $(e.currentTarget).val();
			this.collection.forEach(this.set_model_section_heading, this);
		},
		set_model_section_heading : function (model) {
			model.set('section_heading', this.section_heading);
		},
		render_output : function () {
			if(this.test_json_encode_decode(gridImagesView.collection.toJSON())){
				gridImagesCollectionOutput = new B.Output.Collection.GridImages();
				gridImagesCollectionOutput.reset(gridImagesView.collection.toJSON());
				gridImagesViewOutput = new B.Output.View.GridImages({collection:gridImagesCollectionOutput});
				this.render_to_preview(gridImagesViewOutput.render().html());
			}
		}

	});
		B.Editor.View.GridImage = B.Editor.View.GridImages.extend({
			events:{
				'keyup .grid_form input.editable' : 'update_model',
				'keyup .grid_form textarea.editable' : 'update_model',
				'change .grid_form select.editable' : 'update_model',
				'click a.delete_grid' : 'delete_grid',
			},
			template : _.template($('#GridImage').html()),
			render : function () {
				this.$el.html(this.template(this.model.attributes));

				return this.$el
			},
			delete_grid : function () {
				this.model.destroy();
				this.remove();
			}
		})

	B.Output.View.GridImages = B.Output.View.extend({
		initialize:function(){},
		template : _.template($('#OutputGridImages').html()),
		render : function () {
			this.section_heading = this.collection.at(0).get('section_heading');
			this.$el.html(this.template({section_heading : this.section_heading, model_json:JSON.stringify(this.collection.toJSON())}));
			this.add_all();
			return this.$el;
		},
		add_one : function (column, index) {
			column_widths = 12 / this.collection.length;


			gridImageViewOutput = new B.Output.View.GridImage({model:column, className:'col-sm-'+column_widths});
			this.$el.find('.grid_images_region').append(gridImageViewOutput.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		}
	});

		B.Output.View.GridImage = B.Output.View.GridImages.extend({
			template : _.template($('#OutputGridImage').html()),
			render : function () {
				return this.$el.html(this.template(this.model.attributes))
			}
		})


// END SLIDER





// BEGIN QUICK LINKS
B.Editor.Collection.QuickLinkColumns 	= B.Editor.Collection.extend({});
B.Editor.Model.QuickLinkColumn 			= B.Editor.Model.extend({defaults : function () { return {name:'New Column', column_name_link:'', links:{}}}});
B.Editor.Collection.QuickLinks 			= B.Editor.Collection.extend({});
B.Editor.Model.QuickLink				= B.Editor.Model.extend({defaults : function () { return {url:'example.com', text:'Example Text'}}});

B.Output.Collection.QuickLinkColumns 	= B.Output.Collection.extend({});
B.Output.Model.QuickLinkColumn 			= B.Output.Model.extend({});
B.Output.Collection.QuickLinks 			= B.Output.Collection.extend({});
B.Output.Model.QuickLink				= B.Output.Model.extend({});


	B.Editor.View.QuickLinkColumns = B.Editor.View.extend({
		events : {
			'click a.add_column' : 'add_column',
			'click a.insert_quick_links' : 'render_output',

		},
		template : _.template($('#QuickLinkColumns').html()),
		render : function () {
			this.$el.html(this.template());
			this.add_all();
		},
		add_one : function (column) {
			var quickLinkColumnModel = new B.Editor.Model.QuickLinkColumn();
			column.set(_.extend(quickLinkColumnModel.defaults(), column.attributes));
			quickLinkColumnModel.destroy();
			quickLinkColumn = new B.Editor.View.QuickLinkColumn({model:column});
			this.$el.find('#column_region').append(quickLinkColumn.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		},
		add_column : function () {
			if (this.collection.length < 4) {
				quickLinkColumnModel = new B.Editor.Model.QuickLinkColumn();
				quickLinkColumnModel.set(quickLinkColumnModel.defaults());
				this.collection.add(quickLinkColumnModel);
				this.render();
			}else{
				alert('You can add up to 4 columns. If you want more, just create another quick links section.');
			}
		},
		render_output : function () {
			if(this.test_json_encode_decode(quickLinkColumnsView.collection.toJSON())){
				quickLinkColumnsModelOutput = new B.Output.Collection.QuickLinkColumns();
				quickLinkColumnsModelOutput.reset(quickLinkColumnsView.collection.toJSON());
				quickLinkColumnsViewOutput = new B.Output.View.QuickLinkColumns({collection:quickLinkColumnsModelOutput});
				this.render_to_preview(quickLinkColumnsViewOutput.render().html());
			}
		}

	});

		B.Editor.View.QuickLinkColumn = B.Editor.View.QuickLinkColumns.extend({

			events:{
				'keyup .editable' : 'update_model',
				'click a.delete_column' : 'delete_column',
				'paste .editable' : 'handle_paste'
			},
			template : _.template($('#QuickLinkColumn').html()),
			render : function () {

				this.$el.html(this.template(this.model.attributes))
				links = this.model.get('links');
				quickLinkList = new B.Editor.Collection.QuickLinks();
				quickLinkList.reset(links);

				this.listenTo(quickLinkList, 'add', function (c) {
					this.update_parent_collection(c);
				}.bind(this));

				this.listenTo(quickLinkList, 'change', function (c) {
					this.update_parent_collection(c);
				}.bind(this));

				this.listenTo(quickLinkList, 'remove', function (c) {
					this.update_parent_collection(c);
				}.bind(this));

				quickLinksView = new B.Editor.View.QuickLinks({collection:quickLinkList});
				this.$el.find('.links_region').append(quickLinksView.render());

				return this.$el;
			},

			update_parent_collection : function (c) {
				this.model.set('links', c.collection.toJSON());
			},
			delete_column : function () {
				this.model.destroy();
				this.remove();
			}
		})
			B.Editor.View.QuickLinks = B.Editor.View.QuickLinkColumns.extend({
				events : {
					'click a.add_link' : 'add_link'
				},
				template : _.template($('#QuickLinks').html()),
				render : function () {
					this.$el.html(this.template());
					this.add_all();
					return this.$el;
				},
				add_one : function (link) {
					var quickLinkModel = new B.Editor.Model.QuickLink();
					link.set(_.extend(quickLinkModel.defaults(), link.attributes));
					quickLinkModel.destroy();

					quickLink = new B.Editor.View.QuickLink({model:link});
					this.$el.find('tr:last-of-type').before(quickLink.render());
				},
				add_all : function () {
					this.collection.forEach(this.add_one, this);
				},
				add_link : function () {
					quickLinkModel = new B.Editor.Model.QuickLink();
					this.collection.add(quickLinkModel);
					this.render();
				}
			})
				B.Editor.View.QuickLink = B.Editor.View.QuickLinkColumns.extend({
					tagName : 'tr',
					events : {
						'keyup .editable' : 'update_link',
						'click a.delete_link' : 'delete_link',
					},
					template : _.template($('#QuickLink').html()),
					render : function () {
						return this.$el.html(this.template(this.model.attributes))
					},
					update_link : function (e) {
						this.model.set({url:this.$el.find('[name="url"]').val(), text:this.$el.find('[name="text"]').val()});
					},
					delete_link : function () {
						this.model.destroy();
						this.remove();
					}
				})

	// Begin output
	B.Output.View.QuickLinkColumns = B.Output.View.extend({
		initialize:function(){},
		template : _.template($('#OutputQuickLinkColumns').html()),
		render : function () {
			this.$el.html(this.template({model_json:JSON.stringify(this.collection.toJSON())}));
			this.add_all();
			return this.$el;
		},
		add_one : function (column, index) {
			quickLinkColumnOutput = new B.Output.View.QuickLinkColumn({model:column, className:'col-sm-6 col-md-6 links'})
			// Poor css planning caused this.
			section = (index <= 1)?1:2;
			this.$el.find('#output_column_region_'+section).append(quickLinkColumnOutput.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		}
	});

		B.Output.View.QuickLinkColumn = B.Output.View.QuickLinkColumns.extend({
			template : _.template($('#OutputQuickLinkColumn').html()),
			render : function () {
				this.$el.html(this.template(this.model.attributes))

				links = this.model.get('links');
				quickLinkListOutput = new B.Output.Collection.QuickLinks();
				quickLinkListOutput.reset(links);

				quickLinksViewOutput = new B.Output.View.QuickLinks({collection:quickLinkListOutput});
				this.$el.find('.output_links_region').append(quickLinksViewOutput.render());

				return this.$el;


			}
		})


			B.Output.View.QuickLinks = B.Output.View.QuickLinkColumns.extend({
				tagName : 'ul',
				className: 'output_link_region',
				template : _.template($('#OutputQuickLinks').html()),
				render : function () {
					this.$el.html(this.template());
					this.add_all();
					return this.$el;
				},
				add_one : function (link) {
					quickLinkOutput = new B.Output.View.QuickLink({model:link})
					this.$el.append(quickLinkOutput.render());
				},
				add_all : function () {
					this.collection.forEach(this.add_one, this);
				}
			})

				B.Output.View.QuickLink = B.Output.View.QuickLinkColumns.extend({
					tagName:'li',
					template : _.template($('#OutputQuickLink').html()),
					render : function () {
						return this.$el.html(this.template(this.model.attributes))
					}
				})

// END QUICK LINKS


// File Uploader
B.Editor.View.Uploader = B.Editor.View.extend({
			options : {
				fallback_id: 'upload_button',
				upload_box : '#dropbox',
				upload_url : '/mrg_page_builder/page_builder_functions/upload',
				paramname : 'file',
				maxfiles : 25, // Max number of files that can be uploaded at once
				maxfilesize : 15,
				allowedfileextensions : ['.pdf','.eps','.tiff','.ai'],
				data : {
					'directory' : '/uploads/artwork'
				}
			},
			initialize : function (options) {
				if (typeof options != 'undefined') {
					_.extend(this.options, options);
				}
			},
			render : function () {
				var dropbox = $(this.options.upload_box);
				var message = $('.message', dropbox);
				var self = this;
				// Load up the filedrop jquery plugin
				this.FiledropUpload = dropbox.filedrop({
					// The name of the $_FILES entry:
					fallback_id : 	self.options.fallback_id,
					paramname	:	self.options.paramname,
					maxfiles 	: 	self.options.maxfiles,
					maxfilesize	: 	self.options.maxfilesize, // in mb
					url			: 	self.options.upload_url,
					data 		: 	self.options.data,
					allowedfileextensions: self.options.allowedfileextensions,

					uploadFinished:function(i,file,response){
						self.upload_finished(i,file,response);
					},

					error: function(err, file) {
						self.error(err,file);
					},

					// Called before each upload is started
					beforeEach: function(file){
						return self.before_each(file);
					},

					uploadStarted:function(i, file, len){
						self.upload_started(i,file,len);
					},

					progressUpdated: function(i, file, progress) {
						self.progress_updated(i,file,progress);
					}
				});
			},
			error : function (err,file){
				switch(err) {
					case 'BrowserNotSupported':
						this.show_message('Your browser does not support HTML5 file uploads!');
						break;
					case 'TooManyFiles':
						alert('Too many files! Please upload a maximum of '+this.options.maxfiles+' files at one time.');
						break;
					case 'FileTooLarge':
						alert(file.name+' is too large! Please upload files up to '+this.options.maxfilesize+'.');
						break;
					case 'FileExtensionNotAllowed':
						alert('You are trying to upload an unsupported file extension. Please use the following file types. '+this.options.allowedfileextensions.join(', '));
						break;
					default:
						break;
				}
			},
			before_each : function (file){
				return true;
			},
			progress_updated : function (i, file, progress) {
				//$.data(file).find('.progress').width(progress);
			},
			upload_started : function (i, file, len) {
				this.create_image(file);
			},
			upload_finished : function (i,file,response){
				if (response.status) {
					$.data(file).addClass('done');
				}else{
					$.data(file).addClass('error');
				}
				this.display_url(file,response);
				this.trigger('finished_upload', file, response);
				// response is the JSON object that post_file.php returns
			},
			create_image : function (file){
				var template = '<div class="preview">'+
                        //'<span class="imageHolder">'+
                        //    '<img />'+
                        //    '<span class="uploaded"></span>'+
                        //'</span>'+
                        '<div class="progressHolder">'+
                            '<div class="progress"></div>'+
                        '</div>'+
                    '</div>';
				var preview = $(template),
				image = $('img', preview);

				var reader = new FileReader();

				image.width = 100;
				image.height = 100;

				reader.onload = function(e){
					// e.target.result holds the DataURL which
					// can be used as a source of the image:
					image.attr('src',e.target.result);
				};

				// Reading the file as a DataURL. When finished,
				// this will trigger the onload function above:
				reader.readAsDataURL(file);

				//preview.appendTo(dropbox);s

				// Associating a preview container
				// with the file, using jQuery's $.data():

				$.data(file,preview);
			},
			show_message : function (msg){
				message.html(msg);
			},
			display_url : function (file, response) {
				$.data(file).find('.progressHolder').replaceWith('<p>'+response.target_filename+'</p>');
			}
		});

// End File Uploader


	saveModel = new B.Save.Model();

	editorView = new B.Editor.View({el:'#block_chooser_region'});
	outputView = new B.Output.View({el:'#html_region'});

	outputView.render();

})


