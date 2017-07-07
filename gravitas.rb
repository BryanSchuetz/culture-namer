---
---

#!/usr/bin/env ruby

ships = []

{% for ship in site.ships %}
  ships.push("{{ ship.name }}")
{% endfor %}

name = ships.sample

puts name