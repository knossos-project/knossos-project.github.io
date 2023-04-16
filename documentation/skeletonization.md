# Skeletonization

In KNOSSOS we refer to skeletonization as annotation in the form of a graph structure. The annotator usually places connected nodes along a structure of interest. This process is called _tracing_. Unconnected nodes can be used as landmarks for locations of interest.
The resulting set of coordinates and connections can be used to analyze object morphologies, quantity and density of objects, etc.

The controls for creating a skeleton can be found directly in KNOSSOS under Help ‣ Cheatsheet.


## The Skeleton Object

Here is an overview and some terminology to understand the skeleton structure you create when annotating. For details on the exact file format and how to analyze skeleton annotation, [check here (TODO)](TODO):

### Node

A position specified by cartesian coordinates that may be connected to other nodes.

##### Properties
- _Node ID_: A skeleton-wide unique integer identifier among nodes.
- _Position_: Whole-numbered pixel coordinates in the order x, y, z. The upper left pixel of the image has coordinate 0, 0, 0.
- _Radius_: The node size in pixels.
- _Branch Point Flag_: Can be marked on the selected node with `B` and is visualized by a blue node color. Branch points can be jumped to in reverse order of their marking by pressing `J`.
- _Properties_: A list that can contain any keywords and key value pairs to further describe the node. KNOSSOS has 2 predefined properties for tracing synapses: _PreSynapse_, _PostSynapse_. See [Workflow: Labeling Synapses TODO](TODO ).
- _Comment_: A free-text for custom notes. Nodes with comments are shown in yellow (if they are not already blue branch points).

### Edge

The connector between nodes. There can only be one edge between a pair of nodes.

##### Properties

- _Source node_
- _Target node_

### Tree

A logical grouping of nodes. It can contain any number of connected or unconnected nodes. 

##### Properties
- _Tree ID_: A skeleton-wide unique integer identifier among trees.
- _Nodes_: A list of all nodes in the tree.
- _Color_
- _Properties_: A list that can contain any keywords and key value pairs to further describe the tree. KNOSSOS has 2 predefined properties for tracing synapses: _preSynapse_, _postSynapse_ and _synapticCleft_. See [Workflow: Labeling Synapses](TODO link to section).
- _Comment_: A free-text for custom notes
- _Mesh_: A surface triangulation generated from segmentation. This is only part of the tree object for historical reasons, it has no conceptual relation with the rest of the skeleton annotation.

### Skeleton

The skeleton object describes the entire annotation along with meta information about the annotation and the dataset in which it was created.

##### Properties

- _Experiment_: The image dataset in which the annotation was created
- _Scale_: The nanometer per pixel scale of the experiment
- _Trees_: A list of all trees
- _Work time_: Active time spent on the annotation. Any interaction with KNOSSOS – other than having it open passively – counts.

The skeleton also contains meta information that helps KNOSSOS determine the annotation state of the last session in order to continue where the annotator left off.


## Workflow: Tracing Neurites

In the following we present an example of how KNOSSOS was used to trace images. This should serve as inspiration for how your annotation problem could be tackled. However, there is no prescription for how to use KNOSSOS, adapt the tools to your own needs!

KNOSSOS’ original use case was the manual reconstruction of densely packed neurons and their labyrinth of intermingled neurites in electron microscopy image stacks:

1. The expert user places isolated nodes in the center of every nucleus and saves each of them in an individual annotation file (.k.zip). These nodes are referred to as the “seeds”.
2. Each .k.zip is given out to an annotator who starts out at the seed node to trace a neuron.
3. Whenever the neuron branches off, the annotator places a node at the branching location and marks it as branch point by pressing `B`. (The seed node is always also a branch point.)
4. Then a process is picked and traced down by placing nodes along its center line. The easiest way to stay on the center line is to always work in the orthogonal viewport in which the process appears most circular because this is the view in which one is closest to looking down the neurite’s travel direction. A node placed in the circle center will then be approximately on the center line.
5. Whenever the end of a process is reached, the annotator presses `J` to jump back to the last placed branch point. If more than one untraced branch remains at that position, they press `B` to mark the position as a branch point again before continuing down the next branch.
So in short the workflow is as follows: `B` ‣ trace ‣ `J` ‣ `B` ‣ trace ‣ …
6. If all branches at a location are already traced, `J` will jump to the last branch point before that and the process can be repeated.
7. When KNOSSOS reports that no branch points are left, the reconstruction of the neuron is finished. This is of course under the assumption that the annotator has missed no processes and has always pressed `B` for each of them.

{:note}
To keep a consistent trace resolution, the annotator can define a fixed jump/walk distance here: Preferences ‣ Navigation ‣ Keyboard movement.


## Workflow: Labeling Synapses

In the work mode Tracing Advanced, skeleton annotation can be used to annotate the direction of a synapse as well as the width of its synaptic cleft:

1. Select work mode Tracing Advanced
2. At a synapse location place a node in the area of the pre-synapse.
3. Press `Shift + C` to start a new tree for annotating the cleft.
4. Trace along the width of the cleft.
5. Press `C` to finish the cleft annotation.
6. Place a node in the area of the post-synapse.

**Result**
- The node in the pre-synapse will have a property _PostSynapse_
- The node in the post-synapse will have a property _PostSynapse_
- The tree traced along the cleft will have these properties
    - _postSynapse: [pre-synapse node id]_
    - _preSynapse: [post-synapse node id]_
    - _synapticCleft: true_
