<header class="major special">
About us
--------
</header>

**KNOSSOS** is developed by a group of students from *Heidelberg University* and *Mannheim University of Applied Sciences*, employed at *Max Planck Institute for Medical Research*.

{% for member in site.data.members %}
{% assign loopindex = forloop.index | modulo: 2 %}
{% if loopindex == 1 %}
<div class="row -text-center">
<div class="col -margin">
<img src="{{ site.baseurl }}images/team/{{ member.picture }}" alt="{{ member.description }}" width="200" height="200">
<h4 class="-no-margin">{{ member.name }}</h4>
<p>{{ member.description }}</p>
</div>
{% else %}
<div class="col -margin">
<img src="{{ site.baseurl }}images/team/{{ member.picture }}" alt="{{ member.description }}" width="200" height="200">
<h4 class="-no-margin">{{ member.name }}</h4>
<p>{{ member.description }}</p>
</div>
</div>
{% endif %}
{% endfor %}


Contact us
==========
If you have any questions or suggestions regarding **KNOSSOS**, feel free to write us:

<a href="mailto:knossos-team@mpimf-heidelberg.mpg.de" class="button special icon fa-envelope">knossos-team@mpimf-heidelberg.mpg.de</a>
