export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const comment = comments.find(
      (item) => item.id === Number(id)
    );

    if (!comment) {
      return Response.json(
        { message: "Comment not found." },
        { status: 404 }
      );
    }

    // Update only the provided fields
    if (body.name) comment.name = body.name;
    if (body.email) comment.email = body.email;
    if (body.cmnt) comment.cmnt = body.cmnt;

    return Response.json(
      {
        message: "Comment updated successfully.",
        comment,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const index = comments.findIndex(
      (comment) => comment.id === Number(id)
    );

    if (index === -1) {
      return Response.json(
        { message: "Comment not found." },
        { status: 404 }
      );
    }

    const deletedComment = comments.splice(index, 1);

    return Response.json(
      {
        message: "Comment deleted successfully.",
        deletedComment: deletedComment[0],
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}





    const comments = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    cmnt: "This is a comment from John Doe.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    cmnt: "This is a comment from Jane Smith.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    cmnt: "This is a comment from Bob Johnson.",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    cmnt: "This is a comment from Alice Brown.",
  },
];