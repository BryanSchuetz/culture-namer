
# Jekyll Liquid Filter to select one from an array
# Eg. display a random post title
#     {% assign post = site.posts | random %}
#     {{ post.title }}
module Jekyll
  module RandomFilter
    def random(input)
      input.sample
    end
  end
end

Liquid::Template.register_filter(Jekyll::RandomFilter)