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
