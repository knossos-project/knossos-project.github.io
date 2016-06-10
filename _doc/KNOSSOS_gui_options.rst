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

Clear the current annotation and starts a new one.


Load Annotation... (Ctrl+O)
---------------------------

Open an existing annotation (`.k.zip`).


Recent Annotation File(s)
-------------------------

Shows a list of recently loaded annotation files.


Save Annotation (Ctrl+S)
------------------------

Save and override the current annotation file.

.. note::
    This creates a `k.zip` file. #TODO


Save Annotation As...
--------------------

Save annotation into new file.


Export to NML...
---------------

Export the current annotation into NML.

.. note::
    This is a compatibility format for other annotation software. #TODO


Quit
----

Quits KNOSSOS.



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

Move to the last branch point, and remove it from the list of branch points.

Clear Skeleton
--------------

Remove the current skeleton.



Action (Tracing Advanced)
=========================

Contains following actions: Turn segments {}, New Tree, Push Branch Node, Pop Branch Node, Clear Skeleton.

Turn segments {off once|off|on} (A)
-----------------------------------

This action entry controls how KNOSSOS places segments between nodes. You can toggle between the following 3 options using `A`:

* `off once`: The next placed node will not be connected to the previous one. After this action, all following nodes will be connected again (like `Turn segments on`)
* `off`: Do not connect any nodes.
* `on`: Subsequent nodes will be connected with each other.


New Tree (C)
------------

Start a new skeleton tree.



Action (Merge Tracing)
======================

Contains these actions: New Tree, Push Branch Node, Pop Branch Node, Clear Skeleton, Clear Merge List

Clear Merge List
----------------

Removes all segmentation objects.


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

Move to the node with the next-higher ID.

Move to Previous Node (Shift+X)
-------------------------------

Move to the node with the next-lower ID.

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
    Traversal uses depth-first search.

Previously found Comment (P)
----------------------------

Moves to the previous node whose comment contains the search string. #TODO This action can only be done after `Next Comment` has been used.

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

1. This drop-down menu selects KNOSSOS’ work mode. You can choose between different work modes depending on your annotation task. This will change the available items in the Action menu, and the way KNOSSOS annotates data. #TODO
2. Coordinates. Specify X, Y and Z coordinates of the current position.
2a. Copy the current coordinates to the clip board. This will add a `,` character between each coordinate.
2b. Paste coordinates from the clipboard. This will automatically move to the new position.
3. Open Task Management window.
4. Open Dataset Options window.
5. Open Appearance Settings window.
6. Open Annotation window.
7. Open Python interpreter.
8. Open Snapshot Tool window.
9. Reset VP Position. Resets each viewport’s size and position. Floating viewports will be docked again.
10. `Loader pending:`. Displays the amount of dataset cubes that are queued for loading.

