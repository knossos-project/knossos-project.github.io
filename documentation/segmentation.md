{:note}
The elements that make up 2D images are called pixels, in 3D images they are called voxels. For simplicity’s sake, we will only talk about voxels here and assume that pixels are just voxels with a z dimension of 1.

# Segmentation

Image segmentation is voxel-wise labeling of images. In the most abstract sense, voxels with the same label belong to the same group. For example, one could label all cars in an image with a _Car_ label (this is called **class segmentation**) or every individual car with its own label (**instance segmentation**).
While the first is usually easier to accomplish, the latter gives you the outline and number of objects even when they are touching.

## The Segmentation Object

Here is an overview and some terminology to understand the segmentation structure you create when annotating. For details on the exact file format and how to analyze segmentation, [check here (TODO)](TODO).

### Subobject

The smallest segmentation unit in KNOSSOS. Every voxel with the same label belongs to the same Subobject.

##### Properties

- _Subobject ID_: A unique voxel label among all subobjects in the annotation.

### Object

A meta-object for defining grouping hierarchies.

##### Properties

- _Object ID_: A unique integer identifier among all objects in the annotation.
- _Subobjects_: A list of contained subobjects.


## Working with Segmentation

In the work mode _Segmentation Paint_ you can create segmentation from scratch with a brush tool that _paints_ labels into a segmentation layer. This will create an object with one subobject.
Already existing segmentation objects can be _merged_ in work mode _Segmentation Merge_.

*Example*:
Object 1 with subobject list: [1]
Object 2 with subobject list: [2]
Merge object 2 into object 1. Result:
Object 1 with subobject list: [1, 2]

