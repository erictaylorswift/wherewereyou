define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"container-fluid mt-5\">\n        <div class=\"all-posts\">\n            <h2 class=\"py-3 text-white\">Recent posts</h2>\n        </div>\n        <div class=\"row justify-content-start my-0\">\n"
    + ((stack1 = (helpers.grouped_each || (depth0 && depth0.grouped_each) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),3,depth0,{"name":"grouped_each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.blog_entry : depth0)) != null ? stack1.blog_title : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <div class=\"col-3\">\n                            <div class=\"card shadow-lg rounded\" style=\"max-height: 300px;\">\n                                <div class=\"img-bg\" style=\"background-image: url("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.blog_entry : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\"></div>\n                                <div class=\"card-body\">\n                                    <a href=\"/blog/"
    + alias2(((helper = (helper = helpers.page_slug || (depth0 != null ? depth0.page_slug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page_slug","hash":{},"data":data}) : helper)))
    + "\">\n                                        <h4 class=\"card-title text-success mb-0\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.blog_entry : depth0)) != null ? stack1.blog_title : stack1), depth0))
    + "</h4>\n                                    </a>\n                                    <p class=\"text-black-50 sm-text mt-0 pt-0\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.blog_entry : depth0)) != null ? stack1.published_on : stack1), depth0))
    + "</p>\n                                </div>\n                            </div>\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"blog","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.blog) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true}); });