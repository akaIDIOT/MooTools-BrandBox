var BrandBox = new Class({
    
    Implements: [Events, Options],

    options: {
        items:           '.item',
        headers:         'h2',
        tabs:            false,
        tabItemClass:    'tab',
        tabActiveClass:  'active',
        list:            false,
        listItemClass:   'litem',
        listActiveClass: 'active',
        interval:        5000
    },

    container: null,
    items:     [],
    tabs:      null,
    list:      null,
    current:   0,
    timer:     null,

    initialize: function(container, options) {
        this.setOptions(options);
        this.container = document.id(container);
        this.items     = this.container.getElements(this.options.items);
        var headers    = this.items.getElement(this.options.headers);

        var self = this;

        if (this.options.tabs) {
            this.tabs = new Elements();
            headers.each(function(header, index) {
                var tab = new Element('li', {'class': self.options.tabItemClass, 'text': index + 1, 'title': header.get('text')});
                tab.addEvent('click', function() {
                    self.show(index);
                });
                self.tabs.push(tab);
            });
            this.options.tabs = document.id(this.options.tabs);

            this.options.tabs.empty();
            this.options.tabs.adopt(this.tabs);
        }

        if (this.options.list) {
            this.list = new Elements();
            headers.each(function(header, index) {
                var item = new Element('li', {'class': self.options.listItemClass}).adopt(header.clone());
                item.addEvent('click', function() {
                    self.show(index);
                });
                self.list.push(item);
            });
            this.options.list = document.id(this.options.list);

            this.options.list.empty();
            this.options.list.adopt(this.list);
        }
        
        if (this.items.length > 0) {
            this.items.setStyles({
                visibility: 'hidden',
                opacity: 0
            });
            this.show(this.current, false);

            this.timer = this.next.bind(this).periodical(this.options.interval);
        }

        this.container.store('brandbox', this);
    },

    start: function() {
        this.timer = this.next.bind(this).periodical(this.options.interval);
        this.fireEvent('start', this.current);
    },

    stop: function() {
        $clear(this.timer);
        this.fireEvent('stop', this.current);
    },

    next: function() {
        this.show((this.current + 1) % this.items.length);
    },

    show: function(index, animate) {
        if (index >= 0 && index < this.items.length) {
            if (animate == undefined || animate) {
                this.items[this.current].fade('out');
                this.items[index].fade('in');
            } else {
                this.items[this.current].setStyles({
                    visibility: 'hidden',
                    opacity: 0
                });
                this.items[index].setStyles({
                    visibility: 'visible',
                    opacity: 1
                });
            }
            
            if (this.options.tabs) {
                this.tabs[this.current].removeClass(this.options.tabActiveClass);
                this.tabs[index].addClass(this.options.listActiveClass);
            }

            if (this.options.list) {
                this.list[this.current].removeClass(this.options.tabActiveClass);
                this.list[index].addClass(this.options.listActiveClass);
            }

            this.current = index;
            this.fireEvent('change', this.current);
        }
    }

});
