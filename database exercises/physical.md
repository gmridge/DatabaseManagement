``` mermaid
erDiagram
   USERS {
        string USER_ID_STRING
        string PROFILE_IMAGE_PNG
    }
    POSTS {
        string POST_ID_INTEGER
        string POST_DESC_VARCHAR
        string POST_IMG_PNG
    }
    COMMENTS{
        string USER_ID
        string POST_ID
        var COUNT
    }
      LIKES{
        string USER_ID
        string POST_ID
        var COUNT
    }
USERS||--|{ COMMENTS: actions
USERS||--|{ LIKES: actions
POSTS||--|{ COMMENTS: has
POSTS||--|{ LIKES: has
```