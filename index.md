---
layout: index
title: Home
---
{% comment %}We'll have a random start point for each build. In the HTML only version it will just loop through all ships alphabetically from that point{% endcomment %}
{% assign ship = site.ships | random %}
<div class="copy">
<h3>{{ site.data.app.callToAction }}</h3>
{{ site.data.app.description | markdownify }}
<p><span class="note">Note:</span> {{ site.data.app.note |  markdownify | remove:"<p>" | remove:"</p>" }}</p>
<div class="button"><a href="{{ ship.url }}" class="btn btn--lg btn--green">Pick a Random Ship</a></div> 
</div>