guard 'rake', :task => 'build' do
  watch('index.html')
  watch(%r{^_includes/.+\.html})
  watch(%r{^_includes/_jsmods/.+\.js})
  watch(%r{^_layouts.+\.html})
  watch(%r{^_posts/.+\.md})
  watch('_config.yml')
  watch('index.html')
  watch('assets/css/site.scss')
  watch(%r{^assets/_sass/.+\.scss})
  watch(%r{^_data/.+\.yml})
  watch('about.md')
end
