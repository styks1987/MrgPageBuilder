


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
		'change .module' : 'choose_module'
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
		console.log('choose module');
		value = $(e.currentTarget).val();
		console.log(value);
		this.show_module(value);
	},
	set_module : function (value, data) {
		this.undelegateEvents();
		console.log(this.$el.find('.module'));
		this.$el.find('.module option[value="'+value+'"]').prop('selected', true);
		this.delegateEvents();
		this.show_module(value,data);
	},
	show_module : function (value, data) {
		switch(value){
			case 'quick_links':
				if (typeof quickLinkColumnsView == 'undefined') {
					quickLinkColumnList = new B.Editor.Collection.QuickLinkColumns();
					quickLinkColumnsView = new B.Editor.View.QuickLinkColumns({collection:quickLinkColumnList, el:'#input_region'});
				}else{
					quickLinkColumnsView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					quickLinkColumnList.reset(data);
				}
				quickLinkColumnsView.render();
				break;
			case 'quote':
				if (typeof quoteView == 'undefined') {
					quoteModel = new B.Editor.Model.Quote({quote_name:'Sam Sanderson', quote_text:'I think this is really something special.'});
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
					featuredModel = new B.Editor.Model.Featured({header:'Headline', subheader:'A specific headline', cta_text:'CTA Text', cta_link:'CTA link', background_image:''});
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
					paragraphModel = new B.Editor.Model.Paragraph({header:'Headline', paragraph:'An example paragraph'});
					paragraphView = new B.Editor.View.Paragraph({model:paragraphModel, el:'#input_region'});
				}else{
					paragraphView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					paragraphModel.set(data);
				}
				paragraphView.render();
				break;
			case 'paragraph_image':
				if (typeof paragraphImageView == 'undefined') {
					paragraphImageModel = new B.Editor.Model.ParagraphImage({header:'Headline', paragraph:'An example paragraph', image_link:'', image_alt_text:'', cta_text:'CTA Text', cta_link:'CTA link', background_image:''});
					paragraphImageView = new B.Editor.View.ParagraphImage({model:paragraphImageModel, el:'#input_region'});
				}else{
					paragraphImageView.setElement('#input_region');
				}
				if (typeof data != 'undefined') {
					paragraphImageModel.set(data);
				}
				paragraphImageView.render();
				break;
		}
	},


	// Save the data for later if the file ever needs to be edited
	save_view_model : function (model) {
		delete model.attributes.model_json;
		model.set('model_json', JSON.stringify(model.attributes));
	},
	// When the user finishes and wants to insert it into the page
	render_to_preview: function (html) {
		//console.log(output);
		editorView.trigger('finished_editing', html);
		editorView.$el.empty();
		// Empties the view that called it
		this.$el.empty();
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
		$('html,body').animate({ scrollTop: el.offset().top - offset});
	}
});

	B.Output.View.Toolbar = B.Output.View.extend({
		className:'output_toolbar_wrapper',
		events : {
			'click a.insert_content' : 'show_editor',
			'click a.edit_content' : 'edit_content',
			'click a.delete_content' : 'delete_content'
		},
		template : _.template($('#OutputToolbar').html()),
		render : function () {
			this.$el.html(this.template());
			this.delegateEvents();
			return this.$el;
		},
		save : function () {
			model = new B.Save.Model()
			model.save();
		},
		show_editor : function(e){
			console.log('show editor');
			editorView.render();
			this.scroll_to(editorView.$el);
			this.insert_location = $(e.currentTarget).closest('.output_toolbar_wrapper');
			this.listenToOnce(editorView, 'finished_editing', this.insert_html);
		},
		show_dropzones : function () {
			console.log($('.block').is('*'));
			if ($('.block').is('*')) {
				$(this.render()).insertBefore('.block');
			}else{
				$('#output_region').html('<div class="output_toolbar_wrapper"><a class="btn btn-primary insert_content" href="javascript:void(0)">Insert Contente</a></div>');
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
				console.log('editing');
				// if we are editing we want to
				// replace instead of append
				$(this.current_block).remove();
				$(this.insert_location).after(preview_html);
			}else{
				console.log('not edit');
				$(this.insert_location).before(preview_html);
			}

			this.hide_dropzones();
			this.save();
			this.show_dropzones();
		},
		edit_content : function (e){
			this.is_edit = true;
			// Needs to replace existing content
			this.current_block = $(e.currentTarget).closest('.output_toolbar_wrapper').next('.block');
			block_type = $(this.current_block).data('block_type');
			data = JSON.parse($(this.current_block).find('[name="model"]').val());
			delete data.model_json;
			this.show_editor(e);
			editorView.set_module(block_type, data);
		},
		delete_content : function (e) {
			console.log($(e.currentTarget).closest('.output_toolbar_wrapper'));
			console.log($(e.currentTarget).closest('.output_toolbar_wrapper').next('.block'));
			$(e.currentTarget).closest('.output_toolbar_wrapper').next('.block').remove();
			$(e.currentTarget).closest('.output_toolbar_wrapper').remove();
			this.save();
		}
	})

// BEGIN Image and PARAGRAPH
B.Editor.Model.ParagraphImage = B.Editor.Model.extend();
B.Output.Model.ParagraphImage = B.Output.Model.extend();

B.Editor.View.ParagraphImage = B.Editor.View.extend({
	events : {
		'click a.insert_paragraph_image' : 'render_paragraph_image_output',
		'keyup .paragraph_image input.editable' : 'update_model',
		'keyup .paragraph_image textarea.editable' : 'update_model',
		'change .paragraph_image select.editable' : 'update_model'
	},
	template : _.template($('#ParagraphImage').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes));
		featuredImageView = new B.Editor.View.FeaturedImageView({model:this.model, el:'.image_region'});
		featuredImageView.render();
	},
	render_paragraph_image_output : function () {

		this.save_view_model(paragraphImageModel);

		paragraphImageModelOutput = new B.Output.Model.ParagraphImage();
		paragraphImageModelOutput.set(paragraphImageModel.toJSON());
		paragraphImageModelViewOutput = new B.Output.View.ParagraphImage({model:paragraphImageModelOutput});
		this.render_to_preview(paragraphImageModelViewOutput.render().html());
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
B.Editor.Model.Paragraph = B.Editor.Model.extend();
B.Output.Model.Paragraph = B.Output.Model.extend();

B.Editor.View.Paragraph = B.Editor.View.extend({
	events : {
		'click a.insert_paragraph' : 'render_paragraph_output',
		'keyup .paragraph input.editable' : 'update_model',
		'keyup .paragraph textarea.editable' : 'update_model',
		'change .paragraph select.editable' : 'update_model'
	},
	template : _.template($('#Paragraph').html()),
	render:function () {
		this.model.set('model_json', JSON.stringify(this.model.toJSON()));
		this.$el.html(this.template(this.model.attributes))
	},
	render_paragraph_output : function () {
		this.save_view_model(paragraphModel);
		paragraphModelOutput = new B.Output.Model.Paragraph();
		paragraphModelOutput.set(paragraphModel.toJSON());
		paragraphModelViewOutput = new B.Output.View.Paragraph({model:paragraphModelOutput});
		this.render_to_preview(paragraphModelViewOutput.render().html());
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
B.Editor.Model.Featured = B.Editor.Model.extend();
B.Output.Model.Featured = B.Output.Model.extend();

B.Editor.View.Featured = B.Editor.View.extend({
	events : {
		'click a.insert_featured' : 'render_output',
		'keyup .featured input.editable' : 'update_model',
		'keyup .featured textarea.editable' : 'update_model',
		'change .featured select.editable' : 'update_model',
	},
	template : _.template($('#Featured').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes))
		featuredImageView = new B.Editor.View.FeaturedImageView({model:this.model, el:'.image_region'});
		featuredImageView.render();
	},
	render_output : function () {
		this.save_view_model(featuredModel);
		featuredModelOutput = new B.Output.Model.Featured();
		featuredModelOutput.set(featuredModel.toJSON());
		featuredModelViewOutput = new B.Output.View.Featured({model:featuredModelOutput});
		this.render_to_preview(featuredModelViewOutput.render().html());
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
			this.$el.html(this.template(this.model.attributes));
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
B.Editor.Model.Quote = B.Editor.Model.extend();
B.Output.Model.Quote = B.Output.Model.extend();

B.Editor.View.Quote = B.Editor.View.extend({
	events : {
		'click a.insert_quote' : 'render_output',
		'keyup .quote input.editable' : 'update_model',
		'keyup .quote textarea.editable' : 'update_model',
		'change .quote select.editable' : 'update_model'
	},
	template : _.template($('#Quote').html()),
	render:function () {
		this.$el.html(this.template(this.model.attributes))
	},
	render_output : function () {
		this.save_view_model(quoteModel)
		quoteModelOutput = new B.Output.Model.Quote();
		quoteModelOutput.set(quoteModel.toJSON());
		quoteModelViewOutput = new B.Output.View.Quote({model:quoteModelOutput});
		this.render_to_preview(quoteModelViewOutput.render().html());
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





// BEGIN QUICK LINKS
B.Editor.Collection.QuickLinkColumns 	= B.Editor.Collection.extend({});
B.Editor.Model.QuickLinkColumn 			= B.Editor.Model.extend();
B.Editor.Collection.QuickLinks 			= B.Editor.Collection.extend({});
B.Editor.Model.QuickLink				= B.Editor.Model.extend({});

B.Output.Collection.QuickLinkColumns 	= B.Output.Collection.extend({});
B.Output.Model.QuickLinkColumn 			= B.Output.Model.extend({});
B.Output.Collection.QuickLinks 			= B.Output.Collection.extend({});
B.Output.Model.QuickLink				= B.Output.Model.extend({});


	B.Editor.View.QuickLinkColumns = B.Editor.View.extend({
		events : {
			'click a.add_column' : 'add_column',
			'click a.insert_quick_links' : 'render_output'
		},
		template : _.template($('#QuickLinkColumns').html()),
		render : function () {
			this.$el.html(this.template());
			this.add_all();
		},
		add_one : function (column) {
			quickLinkColumn = new B.Editor.View.QuickLinkColumn({model:column})
			this.$el.find('#column_region').append(quickLinkColumn.render());
		},
		add_all : function () {
			this.collection.forEach(this.add_one, this);
		},
		add_column : function () {
			if (this.collection.length < 4) {
				defaults = {name:'New Column', links:[{url:'example.com', text:'Example Text'}]};
				quickLinkColumnModel = new B.Editor.Model.QuickLinkColumn(defaults);
				this.collection.add(quickLinkColumnModel);
				this.render();
			}else{
				alert('You can add up to 4 columns. If you want more, just create another quick links section.');
			}
		},
		render_output : function () {
			quickLinkColumnsModelOutput = new B.Output.Collection.QuickLinkColumns();
			quickLinkColumnsModelOutput.reset(quickLinkColumnsView.collection.toJSON());
			quickLinkColumnsViewOutput = new B.Output.View.QuickLinkColumns({collection:quickLinkColumnsModelOutput});
			this.render_to_preview(quickLinkColumnsViewOutput.render().html());
		}

	});

		B.Editor.View.QuickLinkColumn = B.Editor.View.QuickLinkColumns.extend({

			events:{
				'keyup' : 'update_name',
				'click a.delete_column' : 'delete_column'
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
			update_name : function (){
				this.model.set('name', this.$el.find('[name="name"]').val());
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
					quickLink = new B.Editor.View.QuickLink({model:link});
					this.$el.find('tr:first-of-type').after(quickLink.render());
				},
				add_all : function () {
					this.collection.forEach(this.add_one, this);
				},
				add_link : function () {
					defaults = {url:'example.com', text:'Example Text'};
					quickLinkModel = new B.Editor.Model.QuickLink(defaults);
					this.collection.add(quickLinkModel);
					this.render();
				}
			})
				B.Editor.View.QuickLink = B.Editor.View.QuickLinkColumns.extend({
					tagName : 'tr',
					events : {
						'keyup' : 'update_link',
						'click a.delete_link' : 'delete_link'
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
				$.data(file).find('.progress').width(progress);
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

				preview.appendTo(dropbox);

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


