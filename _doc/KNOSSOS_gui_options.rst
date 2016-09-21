KNOSSOS GUI Options
###################




KNOSSOS Menu Bar
****************

File
====

Choose Dataset...
----------------

Load a dataset into KNOSSOS.


Create New Annotation (Ctrl+N)
------------------------------

Clear the current annotation and start a new one.


Load Annotation... (Ctrl+O)
---------------------------

Open an existing annotation (`.k.zip`).


Recent Annotation File(s)
-------------------------

Shows a list of recently loaded annotation files.


Save Annotation (Ctrl+S)
------------------------

Save current annotation file with default name.

.. note::
    This creates a `k.zip` file. #TODO


Save Annotation As...
--------------------

Save annotation, specifying a name.


Export to NML...
---------------

Export the current annotation into NML.

.. note::
    This is a compatibility format that can be loaded into WebKnossos.


Action
======

This menu shows available actions for the current annotation mode. #TODO See annotation combo box

Action (Tracing mode)
=====================

Contains these actions: Push Branch Node, Pop Branch Node, Clear Skeleton

Push Branch Node (B)
--------------------

Mark the current node as a branch point.

Pop Branch Node (J)
-------------------

Move to the last branch point, and remove its branch mark.

Clear Skeleton
--------------

Delete the current skeleton.



Action (Tracing Advanced)
=========================

Contains following actions: Turn segments {off once|off|on}, New Tree, Push Branch Node, Pop Branch Node, Clear Skeleton.

Turn segments {off once|off|on} (A)
-----------------------------------

This action entry controls how KNOSSOS places segments between nodes. You can toggle between the following 3 options using `A`:

* `off once`: The next placed node will not be connected to the previous one. This affects only the next node. All following nodes will be connected again.
* `off`: Never connect nodes to their predecessor.
* `on`: Always connect nodes to their predecessor.


New Tree (C)
------------

Start a new skeleton tree.



Action (Merge Tracing)
======================

Contains these actions: New Tree, Push Branch Node, Pop Branch Node, Clear Skeleton, Clear Merge List

Clear Merge List
----------------

Delete all segmentation objects.


Action (Segmentation Merge)
===========================

Contains this action: Clear Merge List


Action (Segmentation Paint)
===========================

Contains this action: Clear Merge List


Navigation
==========

Pen Mode
--------

This enables KNOSSOS to be used with a pen by switching Right and Left mouse buttons. Tapping on screen will place a node.


Jump To Active Node (S)
----------------------

Move to the active node.

Move To Next Node (X)
---------------------

Move to next connected node. With this you can iterate all nodes that are directly or indirectly connected to the current node.

Move to Previous Node (Shift+X)
-------------------------------

Move back to previous node if moved forward with X before.

Move To Next Tree (Z)
---------------------

Move to the tree with the next-higher ID.

Move To Previous Tree (Shift+Z)
-------------------------------

Move to the tree with the next-lower ID.

Dataset Navigation Options
--------------------------

Opens the `Dataset Navigation` window.



Comments
========

#TODO how to add comments to nodes
#note is case-insensitive

Next Comment (N)
----------------

Moves to the next node whose comment contains the search string.

.. note::
    Results appear in depth-first search order.

Previously found Comment (P)
----------------------------

Moves back to previous node whose comment contains the search string. 

Comment Shortcut (F1-F10)
------------------------

Saves the specified comment into the current node. You can specify comments in the Comments tab of the Annotation window.


Preferences
===========

Load Custom Preferences
-----------------------

Load your custom KNOSSOS preference file (`.ini`).

Save Custom Preferences
-----------------------

Save your current preferences into a KNOSSOS preference file.

.. note::
    For instance, you can save your window arrangement and any KNOSSOS customizations you made.


Reset to Default Preferences
----------------------------

Resets the current preferences to default values.


Data Saving Options
-------------------

Opens the `Data Saving Options` window.

Appearance Settings
-------------------

Opens the `Appearance Settings` window.


Windows
=======

Task Management
---------------

Opens the `Task Management` window.

Annotation Window
-----------------

Opens the `Annotation` window.

Dataset Options
---------------

Opens the `Dataset Options` window.

Take a snapshot
---------------

Opens the `Snapshot Tool` window.


Scripting
=========

These menu actions are used in connection with the `KNOSSOS Python interface`. #TODO

Help
====

Documentation (Ctrl+H)
----------------------

Opens this documentation!

About
-----

Opens a window containing information about the current KNOSSOS version.


KNOSSOS Toolbar
***************

1. This drop-down menu selects KNOSSOS’ work mode. You can choose between multiple work modes depending on your annotation task. Each work mode offers different actions in the Action menu and solves different annotation problems. #TODO
2. Coordinates. Specify X, Y and Z coordinates of the current position.
2a. Copy the current coordinates to the clip board.
2b. Paste coordinates from the clipboard. This will automatically move to the new position. Pasted coordinates should be three separate numbers, e.g. “1500, 1000, 1000”.
3. Open Task Management window.
4. Open Dataset Options window.
5. Open Appearance Settings window.
6. Open Annotation window.
7. Open Python interpreter.
8. Open Snapshot Tool window.
9. Reset VP Position. Resets all viewports’ size and position. Floating viewports will be docked again.
10. `Loader pending:`. KNOSSOS pre-loads dataset cubes at the current position and its surrounds. This label displays the number of remaining cubes queued for loading.


KNOSSOS Windows
***************

Annotation Window
=================

Under :guilabel:`Windows` :guilabel:`Annotation Window` you will find the central window for viewing and managing your annotation.

It is divided into three tabs `Skeleton`, `Segmentation` and `Comments`.


Skeleton Tab
------------

The skeleton tab contains two tables giving you an overview of skeleton trees and nodes in your current annotation. This is only relevant for you if you annotate your data by skeletonization. The `Segmentation Tab` covers annotation by volume segmentation.

.. image:: images/doc_treeview.png

Elements that you select in the tables are also selected in the viewports and vice versa. Additionally, the active tree and active node — which mark the position where annotation continues — are indicated with a green arrow at the beginning of the row. This should help you to orient yourself.

If you want to focus on certain parts of your annotation, you can filter both tables by comments specified in the text fields over them. These also support regular expressions through the “regex” checkbox on their right. Regular expressions allow you to formulate more complex filter conditions. For example “[0-9]” would list all elements whose comment contains a number.

.. note:: Double-click on the divider in between the tables to change wether they are placed next to or over each other.

Below are more detailed explanations of the respective tables.

Tree Table
""""""""""
The tree table has following columns:
* ID: A unique ID within this annotation. Not editable.
* Tree color: Double-click to change.
* Show: Toggle visibility of the tree in the viewports.
* \#: The number of nodes in this tree. Not editable.
* Comment: A place for a note. Trees can be filtered by this field.

Right-clicking a selected row or a set of selected rows opens a context menu with following entries:
* Jump to first node: Jumps to the first node created in this tree.
* Move selected nodes to this tree: You can alternatively drag and drop selected nodes from the node table onto a tree in the tree table.
* Merge trees: Merges all nodes in the selected trees into one, deleting the original trees. Needs at least two selected trees.
* Set comment for trees: Let’s you write a common comment for all selected trees.
* Show selected trees: Makes the trees visible in the viewports.
* Hide selected trees: Hides the trees in the viewport.
* Restore default color: Restores the selected trees’ default color based on its ID.
* Delete tree(s): Deletes all selected trees and their nodes (a confirmation request will show up). Pressing DEL achieves the same.


Node Table
""""""""""
The node table has following columns:
* ID: A unique ID within this annotation. Not editable.
* x, y, z: The node’s coordinates. Can be edited to specify a detailed position. But moving inside the viewport through middle-click and hold is generally easier.
* Radius: The node radius. Bigger nodes are easier to see. #TODO explain what they can be used for.
* Comment: A place for a note. Nodes can be filtered by this field.

Right-clicking a selected row or a set of selected rows opens a context menu with following entries:
* Jump to node: Jump to the location of the node. You can also simply press S in a viewport to jump to the active node.
* Extract connected component: Moves all nodes directly or indirectly connected to this node into a new tree.
* Link/Unlink nodes: Create or remove the connection between the two selected nodes. Alternatively, you can Alt+left-click a node inside a viewport to link or unlink it with the active node.
* Set comment for nodes: Let’s you write a common comment for all selected nodes.
* Set radius for nodes: Let’s you choose a common radius for all selected nodes.
* Delete node(s): Deletes all selected nodes (a confirmation request will show up). Pressing DEL achieves the same.

.. note:: 
Extracting a connected component can be used if you traced a very long branch and afterwards realize that it does not belong to your cell. Of course you could delete every single node of the branch one at a time. But it is easier to delete only the first connecting segment at the branchpoint, split the two trees with this function and delete the whole branch tree at once.

Display Options
^^^^^^^^^^^^^^^
The Display options is a collapsible section that offers more complex filtering additionally to comment filtering. These options have precedence over comment filtering, i.e. if a node satisfies the comment filter but not the display option, it is not shown.

Following filter flags are available:
* in selected tree: Accepts all nodes that are in a selected tree.
* selected: Accepts only nodes that are selected themselves.
* branch node: Accepts nodes with a branch mark. #TODO see branch points
* comment node: Accepts nodes that have a comment.
* synapse node: Accepts nodes that are part of a synapse.

The dropdown list on the left lets you specify if nodes should only be shown if they match all ticked critera or if it is enough to match at least one.

The image below shows some filtering examples.
* In (A) nodes are shown whose comment contains “First”.
* In (B) only nodes are shown that are branch nodes *and* have a comment.
* In (C) nodes are shown that are branch nodes *and/or* have a comment.
* In (D) nodes are shown that are branch nodes *and* whose comment contains “Last”. But since the only node that contains “Last” is not a branch node, it is not shown.

.. image:: images/doc_displayoptions.png

Commands
^^^^^^^^

The collapsible Commands section contains further operations that are needed less frequently:

* Default node radius: Lets you define a node radius for all subsequent nodes. The KNOSSOS default is 1.5px.
* Locking: Sometimes you might want to maintain a maximum distance between nodes while tracing to have a consistent accuracy throughout your annotation. For this, ticking “Lock to active node” prevents you from placing nodes farther away from the last node than the specified “Locking radius”.
	* Depending on your annotation task you might also want to cluster your annotation around certain interesting centers. In this case you don’t want the locking position to move to every new node but to stay at the center. To achieve this, you can require that locking should only take place on nodes with certain comments. Then place a node with that comment at the cluster center. As soon as it is active, locking will stay there as long as no other node containing that same comment becomes active.
	* “Disable current locking” releases locking on the current position. But the next active node can still be locked. To turn off locking entirely, you need to uncheck “Lock to active node”.

.. image:: images/doc_locking.png #show locking to active node and locking to active node with comment



Segmentation Tab
----------------
The segmentation tab contains a table of segmentation objects in your current annotation. This is only relevant for you if you annotate your data by volume segmentation. The `Skeleton Tab` covers annotation by skeletonization.

.. note:: The Segmentation Tab is only available if you have checked “Load segmentation overlay” when loading a dataset before (File → Choose Dataset). If you want to enable segmentation, simply reload the dataset with a tick in that checkbox.

* The checkbox “Show only selected objects” lets you hide not-selected objects and subobjects in the viewports. This is useful if you want to concentrate on certain objects without being disturbed by surrounding annotations.

* A brush radius spin box lets you resize the brush. Alternatively it can be changed via Shift+mouse-scroll.

* The mutually exclusive 2D and 3D buttons determine wether the brush works in the plane or in 3D.

* The objects table can be filtered by category with the dropdown list in the upper left.

* Just like in the Skeleton Tab a comment filter field is available. Regular expressions can be used on this filter by ticking the “regex” checkbox. Regular expressions allow you to formulate more complex filter conditions. For example “[0-9]” would list all elements whose comment contains a number.

* At the bottom the number of objects and subobjects can be seen. Note that the number of subobjects can be smaller than the total number of subobjects in objects since multiple objects can contain the same subobject.

* The “hovered raw segmentation” label displays the segmentation dataset ID underneath the mouse pointer.

Objects table
"""""""""""""
The objects table shows all segmentation objects. It contains following columns:
* Color: the objects color. Can be changed by double-clicking on it.
* Object ID: A unique ID within the annotation. Not editable.
* Lock: Normally, when merging multiple objects, they are moved together and the original objects are lost. Locked objects on the other hand are kept and the merge result is stored in a separate merge-object. This way accidental merges can be easily undone by deleting the merge-object.
* Category: The object’s category describes the type of data it represents. It can be either selected from the existing dropdown list, or you can directly define a new category here. This new category will then be added to the dropdown.
* Comment: While categories describe general object types, comments can be any information on single objects.
* \#: The number of subobjects contained in the object. Objects with more than one subobject are merge results.
* Subobject IDs: The list of subobjects contained in the object. Due to space reasons only the 10 first subobjects are listed.

Comments Tab
------------

Here you can define your comment shortcuts and select distinguishing  node colors and radii for them.

If you want to activate color and radius highlighting, you have to check the options “Use custom comment color” and “Use custom comment radius”.

Shortcuts can be placed on F1-F10. When pressing a comment shortcut during skeletonization, the currently active node will receive the corresponding comment. 
If the current workmode is “Segmentation Merge” or “Segmentation Paint”, the comment is placed on the selected object instead. Color and node highlighting do not affect segmentation objects.

* The shortcuts will be saved for you on closing KNOSSOS.
* Note that if a comment matches several substrings, only the first substring will be considered for highlighting. So place your most important substring into the first text box, the second most important into the second text box, and so on.


Load Dataset Window
===================
.. image:: the dataset load widget
The Load Dataset Window lets you load an image dataset for annotation. You can select a dataset or add a new one to the list with the “…” button and then press “Load Dataset” at the bottom of the window to load it.
With the “×” button in each list row you can let KNOSSOS forget a dataset.

The selected dataset’s details are shown below the list. If KNOSSOS cannot find a dataset in the provided path, it will show no details. At the moment a dataset can have following information:

* indication if it is a local dataset or a remote one loaded over network.
* Name: The dataset’s experiment name
* URL: Available for remote datasets
* Boundary: The size in dataset pixels
* Compression Ratio: Ratio of jpeg compression.
* Cube Edge Length: Edge length of the dataset’s cubes
* Magnification: The magnification that will be loadad. The dataset can contain more magnifications.
* Scale: nm per dataset pixel

Below the dataset are additional settings that tell KNOSSOS, how the dataset should be loaded.

* “FOV per dimension” describes the field of view in pixels.

* The “load segmentation overlay” checkbox determines if segmentation data is loaded. This checkbox must be enabled if you want to use segmentation features.

Note that enlarging field of view and enabling segmentation overlay increase memory consumption.


Preferences Window
==================
The appearance settings let you configure what should be displayed in the viewports. You can customize display of skeleton trees and nodes, of dataset and segmentation, and lastly of vewport decorations.

Trees Tab
---------
..image:: trees tab

* “Highlight active tree”: Renders the active tree in red.
* “Highlight intersections”: Shows black markers on trees at plane intersections.
* “Enable light effects”: Shows light effects on the skeleton. If turned on the segments’ orientation is easier recognizable but the original tree color becomes harder to distinguish.
* “Use custom tree colors”: Lets you choose you own color lookup table for the trees. Color assignment is based on the tree ID.
* Show skeleton in Ortho VPs: Lets you toggle skeleton rendering in the viewport planes.
* Show skeleton in 3D VP: Lets you toggle skeleton rendering in the 3D viewport.
* “Show whole skeleton”: Shows all trees in the viewports. This setting takes only effect in viewports that have skeleton rendering enabled through the “Show skeleton” checkboxes above.
* “Show only selected trees”: Shows only selected trees in the viewports. This is useful if you do not want to clutter your view with uninteresting trees. Select trees that you wish to see in the trees table under Windows→Annotation Window→Skeleton. Note, that the active tree is always visible.
This setting takes only effect in viewports that have skeleton rendering enabled through the “Show skeleton” checkboxes above.
* “Depth cutoff”: Lets you adjust how far in the orthogonal direction of each viewport the skeleton is still visible. E.g. with a depth cutoff of 5 you can see nodes in the range of your current z coordinate ±5.
* “Skeleton rendering quality”: The skeleton rendering quality is a performance setting.
	- “Tubes & spheres” renders the skeleton as a real 3D structure, in which segments are tubes and nodes are spheres.
	- “Lines & points” renders the skeleton less performance costly as lines for segments and points for nodes.
	- “Switch dynamically” makes KNOSSOS switch dynamically between the two options based on the zoom level: If zoomed out far, 3D structures are most likely not distinguishable anyway, so “Lines & points” is activated. If zoomed close enough “Tubes & spheres” are rendered.
The “Tubes & spheres” setting becomes more costly with bigger skeletons to render. So it can also help to “Show only selected trees”.

Nodes Tab
---------
..image:: nodes tab

* “Show node IDs”: Display node IDs inside the viewports for easier orientation.
* “Show node comments”: Display node comments inside the plane viewports.
* “Override node radius”: Temporarily override all node radii with this value. This does not change the actual radius values. It is useful to override node radii with a larger value for example whenever you zoom out very far and would still like to see the nodes.
* “Edge : Node radius ratio”: Set the edge thickness depending on the attached node’s radius.

Property Highlighting
"""""""""""""""""""""
This section lets you visualize numerical node properties by radius and color highlighting.

* For radius highlighting: Select a property and a scale factor. The radius of nodes with selected property will be overridden with their respective property value times the scale factor.

* For color highlighting: Select a property and the value range that should be visualized. Finally choose a color lookup table (LUT) that continuosly maps the property values to a color. KNOSSOS is compatible with ImageJ binary LUTs.

Dataset & Segmentation Tab
--------------------------
..image:: dataset & segmentation tab

* “Enable linear filtering”: Apply smoothing filter to dataset and segmentation overlay.
* “Use own dataset colors”: Load a custom color lookup table (LUT) for the dataset. KNOSSOS is compatible with ImageJ binary LUTs.
Bias and range delta can be used in conjunction to adjust the dataset contrast:
* “Bias”: specifies the smallest value that will be mapped to black, effectively shifting the color range. The default value is a bias of zero.
* “Range delta”: determines the displayed color range. The default value is a range of 255.
* “Overlay opacity”: Adjust the segmentation overlay opacity. If you just want to hide overlay temporarily, you can also simply hold the space bar.
* “Show volume in 3D viewport”: Replaces the view in the 3d viewport with a segmentation rendering. While the default view shows the viewport planes and skeletonization, the volume rendering only shows segmentation data.

Viewports Tab
-------------
..image:: viewports tab

On the left side:
* “Show viewport decorations”: Shows or hides the buttons attached to each viewport.
* “Draw intersection crosshairs”: Shows or hides the intersection lines of the three orthogonal plane viewports. Each intersection line has the color of the corresponding viewport’s border
* “Add viewport with arbitrary view”: This is an experimental feature. It shows a 4th plane viewport that can have arbitrary orientation. When tracing in this viewport it automatically orients itself orthogonally to the tracing direction. This should improve the annotation quality because the view follows the neuron structure. The orientation can also be manually rotated around its z-axis with K and Shift+K and around its y-axis with L and Shift+L. The rotation can be reset in the menu at the upper right corner of the viewport.

On the right side:
* “Viewport planes”: Decide which of the orthogonal viewport planes should be seen inside the 3d viewport. To show the arbitrary plane, check “Add viewport with arbitrary view” on the left first.
* “Dataset boundary unit”: Choose in which unit dataset boundaries should be shown
* “Rotation around”: Select the rotation center. You can rotate the 3d view by dragging with the right mouse button.

Autosave Tab
------------
..image:: autosave tab

Here you can turn on autosave to automatically save your annotation periodically.

* “Auto-increment filename” is especially useful if you do not want to overwrite on each autosave. This allows you to retrieve previous versions of your annotation, e.g. in case of mistakes in later versions.
* The default location for annotation files is shown at the bottom. This is where your annotation is stored if it was not saved to another location before.

Navigation Tab
--------------
..image:: navigation tab

* “Movement area”: Specify custom boundaries to restrict movement and annotation to that specific area of interest to you.
* “Keyboard movement”: Specify step size and speed with which you browse through the dataset.
	- “Movement speed”: The browsing speed in slices/s affects movement with arrow keys, as well as key pairs D/F and E/R.
	- “Jump frames (D, F)”: Choose how many frames to _jump_ through the dataset when pressing D (backward) or F (forward).
	- “Walk frames (E, R)”: Choose how many frames to _walk_ through the dataset when pressing E (backward) or R (forward). As opposed to jumping, walking browses smoothly through the frames on the way instead of skipping them.
* “Recentering behaviour”: Customize how the camera should recenter while tracing.
	* “Recenter on new node (default)”: After placing a node the orthogonal viewports automatically focus on it.
	* “No recentering”: The camera never moves on its own.
	* “Additional movement in tracing direction”: The camera does not focus on newly placed nodes but moves ahead in tracing direction a defined amount of steps. Here, the tracing direction is defined by the vector between the last two nodes.