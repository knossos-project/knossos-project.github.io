# Skeletonization

In KNOSSOS, skeletonization is annotation in the form of an undirected graph structure: The annotator places nodes that can be connected by edges.

## Terminology

**Node**: A position specified by cartesian coordinates that may be connected to other nodes.
**Branch point**: A node that was marked and can be jumped to later. It was originally used to be able to trace a branch and then jump back to the forking location to continue down the next branch.
**Edge**: The connector between nodes. There can only be one edge between a pair of nodes.
**Tree**: A logical grouping of nodes.
**Skeleton**: The collection of all trees. It describes the complete annotation.

## Tracing Neurites

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
To keep a consistent node density, the annotator can define a fixed jump/walk distance here: Preferences ‣ Navigation ‣ Keyboard movement.


## Use Case 2: Labeling Synapses

Skeleton annotation can be used to annotate synapse width and direction.

## Old

Nodes are placed by a right click in one of the three slice plane viewports, and are automatically linked to the last node. To just “drop” nodes without linking, you have to change the work mode via Edit Skeleton and Work Mode in the menu bar.

* The currently active node can be recognized by its number which appears beside the point or via the Annotation window.,

* You can activate a node by holding down Shift and left-clicking it or by selecting the node in the Tree View tab of the Annotation Window.
* Press x/Shift-X in one of the viewports to activate the next/previous node. To change the active tree, press z or Shift-Z.
* To jump to the active node press s.
* You can delete the active node by pressing Del on your keyboard.
* If you want to reposition a node, simply click on the node with the middle mouse button and drag it to another position. The node does not have to be your active node.

You can add branch nodes by holding Ctrl while pressing the right mouse button.

To transform a normal node to a branch node, press b or choose Push Branch Node in the Annotation window.

To jump to the last placed branch node, press j or use Pop & Jump in the Annotation Window. This transforms the branch node to a normal node.

Different node colors indicate different node types:

* Blue: Branch node
* Yellow: Commented node (will be blue, if it is also a branch node)

To link two non-connected nodes or to unlink two connected nodes, activate one of them, hold Alt and left-click the second node or hold Shift and click on the second node with the mouse wheel.

Alternatively, this can also be done in the _Annotation Window_.