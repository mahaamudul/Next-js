export async function GET() {
  return Response.json(comments);
}

export async function POST(request) {
  try {
    const { name, email, cmnt } = await request.json();

    // Basic validation
    if (!name || !email || !cmnt) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const newComment = {
      id: comments.length + 1,
      name,
      email,
      cmnt,
    };

    comments.push(newComment);

    return Response.json(
      {
        success: true,
        message: "Comment added successfully.",
        comment: newComment,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Invalid request body.",
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

