

B.Editor.Collection.QuickLinkColumns 	= Backbone.Collection.extend({});
B.Editor.Model.QuickLinkColumn 			= Backbone.Model.extend({});
B.Editor.Collection.QuickLinks 			= Backbone.Collection.extend({});
B.Editor.Model.QuickLink				= Backbone.Model.extend({});

B.Output.Collection.QuickLinkColumns 	= Backbone.Collection.extend({});
B.Output.Model.QuickLinkColumn 			= Backbone.Model.extend({});
B.Output.Collection.QuickLinks 			= Backbone.Collection.extend({});
B.Output.Model.QuickLink				= Backbone.Model.extend({});


	B.Editor.View.QuickLinkColumns = B.Editor.View.extend({
		events : {
			'click a.add_column' : 'add_column',
			'click a.insert_into_page' : 'render_output'
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
			console.log(quickLinkColumnsView.collection.toJSON());
			quickLinkColumnsModelOutput = new B.Output.Collection.QuickLinkColumns();
			quickLinkColumnsModelOutput.reset(quickLinkColumnsView.collection.toJSON());
			quickLinkColumnsViewOutput = new B.Output.View.QuickLinkColumns({collection:quickLinkColumnsModelOutput, el:'#output_region'});
			quickLinkColumnsViewOutput.render();
			this.save();
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
		template : _.template($('#OutputQuickLinkColumns').html()),
		render : function () {
			this.$el.html(this.template());
			this.add_all();
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
