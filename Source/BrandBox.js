var BrandBox = new Class({
    
    Implements: [Events, Options],

    options: {
        items:    '.item',
        headers:  'h2',
        tabs:     false,
        list:     false,
        interval: 5000
    },

    container: null,
    items:     [],
    tabs:      null,
    list:      null,
    current:   -1,
    timer:     null,

    initialize: function(container, options) {
        this.container = document.id(container);
        this.items     = this.container.getElements(this.options.items);
        var headers    = this.items.getElement(this.options.headers);

        var self = this;

        if (this.options.tabs) {
            this.tabs = new Elements();
            headers.each(function(header, index) {
                var tab = new Element('li', {'class': 'tab', 'text': index + 1});
                tab.addEvent('click', function() {
                    self.show(index);
                });
                this.tabs.push(tab);
            });
            this.options.tabs = document.id(this.options.tabs);

            this.options.tabs.empty();
            this.options.adopt(this.tabs);
        }

        if (this.options.list) {
            this.list = new Elements();
            headers.each(function(header, index) {
                var item = new Element('li', {'class': 'item', 'text': header});
                item.addEvent('click', function() {
                    self.show(index);
                });
                this.list.push(item);
            });
            this.options.list = document.id(this.options.list);

            this.options.list.empty();
            this.options.adopt(this.list);
        }
        
        if (items.length > 0) {
            this.show(0);

            this.timer = this.next.periodical(this.options.interval);
        }
    },

    start: function() {
        this.timer = this.next.periodical(this.options.interval);
        this.fireEvent('start', this.current);
    },

    stop: function() {
        $clear(this.timer);
        this.fireEvent('stop', this.current);
    },

    next: function() {
        this.show((this.current + 1) % this.items.length);
    },

    show: function(index) {
        if (index > 0 && index < this.items.length) {
            this.items[this.current].fade('out');
            this.items[index].fade('in');
            
            if (this.options.tabs) {
                this.tabs[this.current].removeClass('active');
                this.tabs[index].addClass('active');
            }

            if (this.options.list) {
                this.list[this.current].removeClass('active');
                this.list[index].addClass('active');
            }

            this.current = index;
            this.fireEvent('change', this.current);
        }
    }

});
