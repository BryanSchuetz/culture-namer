---
layout: index
---
<div class="copy">
<h3>{{ site.data.app.callToAction }}</h3>
{{ site.data.app.description | markdownify }}
<p><span class="note">Note:</span> {{ site.data.app.note |  markdownify | remove:"<p>" | remove:"</p>" }}</p>
<div class="button"><a href="" class="btn btn--lg btn--green">Pick a Random Ship</a></div> 
</div>