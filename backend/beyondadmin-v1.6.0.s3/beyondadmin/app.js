
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , methodOverride = require('method-override');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/assets/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);
app.get('/index.html', routes.index);


app.get('/databoxes.html', routes.databoxes);
app.get('/widgets.html', routes.widgets);
app.get('/elements.html', routes.elements);
app.get('/font-awesome.html', routes.font_awesome);
app.get('/glyph-icons.html', routes.glyph_icons);
app.get('/typicon.html', routes.typicon);
app.get('/weather-icons.html', routes.weather_icons);
app.get('/tabs.html', routes.tabs);
app.get('/alerts.html', routes.alerts);
app.get('/modals.html', routes.modals);
app.get('/buttons.html', routes.buttons);

app.get('/nestable-list.html', routes.nestable_list);
app.get('/treeview.html', routes.treeview);
app.get('/tables-simple.html', routes.tables_simple);
app.get('/tables-data.html', routes.tables_data);
app.get('/form-layouts.html', routes.form_layouts);
app.get('/form-inputs.html', routes.form_inputs);
app.get('/form-pickers.html', routes.form_pickers);
app.get('/form-wizard.html', routes.form_wizard);
app.get('/form-validation.html', routes.form_validation);
app.get('/form-editors.html', routes.form_editors);
app.get('/form-inputmask.html', routes.form_inputmask);
app.get('/flot.html', routes.flot);
app.get('/morris.html', routes.morris);
app.get('/sparkline.html', routes.sparkline);
app.get('/easypiecharts.html', routes.easypiecharts);
app.get('/chartjs.html', routes.chartjs);
app.get('/profile.html', routes.profile);
app.get('/inbox.html', routes.inbox);
app.get('/message-view.html', routes.message_view);
app.get('/message-compose.html', routes.message_compose);
app.get('/calendar.html', routes.calendar);
app.get('/timeline.html', routes.timeline);
app.get('/pricing.html', routes.pricing);
app.get('/invoice.html', routes.invoice);
app.get('/login.html', routes.login);
app.get('/register.html', routes.register);
app.get('/lock.html', routes.lock);
app.get('/typography.html', routes.typography);
app.get('/error-404.html', routes.error_404);
app.get('/error-500.html', routes.error_500);
app.get('/blank.html', routes.blank);
app.get('/grid.html', routes.grid);
app.get('/index-rtl-ar.html', routes.index_rtl_ar);
app.get('/index-rtl-fa.html', routes.index_rtl_fa);
app.get('/versions.html', routes.versions);





http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
