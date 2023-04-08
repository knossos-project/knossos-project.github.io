# Skeletonization vs Segmentation

Depending on the information you want to extract from your images, you can choose between skeletonization and segmentation annotation. Each has its own uses and its own set of advantages and drawbacks.

**Morphology vs Volume**: The graph structure of skeletonization contains information about an object’s morphology: its number and location of branch points, branch lengths, angle between branches, number of endpoints… This information is very hard to extract from segmentation.
Segmentation on the other hand captures the object’s shape: It contains volume information and can be converted into a mesh on which surface area calculations can be performed. Meshes are also suitable for creating beautiful 3D visualizations.

**Tracing vs Painting/Merging**: When talking about skeletonization, we call the process of manual annotation *tracing* because the annotator traces down branches by placing nodes along the way. Segmentation annotation is done either by *painting* with a brush or by *merging* pre-generated segmentation objects.

**Sparse vs Dense**: Skeletonization is sparse in the sense that it does not label every single pixel/voxel. The resolution of the reconstruction depends on the density of placed nodes. Segmentation on the other hand is dense because all pixels/voxels that are part of an object are labeled as such.
Consequently, segmentation consumes much more space than skeletonization. Painting segmentation also takes significantly longer than skeleton tracing. A stretch of data that takes a few seconds to trace can take well over half an hour to paint.

**Scalability**: Skeletons can be rescaled without loss of information by simply multiplying each node coordinate with a factor. This makes it very easy to overlay them with different image resolutions.
Segmentation on the other hand is nothing else than a rasterized image and as such loses information when being scaled down.

**Conversion**: A skeleton can be turned into segmentation by labeling all pixels/voxels through which the skeleton edges run. However, the resulting segmentation will have a thickness of 1. It depends on the image quality and the complexity of the object shape how well thickness can be added automatically.
Segmentation can also be converted into a skeleton, however the result will possibly lose very short branches and/or contain spurious short branches that need to be pruned heuristically.

## Use Cases for Skeletonization

* Primary interest lies in answering morphological questions.
* Reconstruction targets have complex morphologies and overlap on the pixel/voxel level due to insufficient image resolution.
* User has no capability to automatically generate a pre-segmentation.
* User has little time/space resources available.

## Use Cases for Segmentation

Primary interest lies in producing accurate 3D visualizations of object shapes or in analyzing object volumes and surfaces.
