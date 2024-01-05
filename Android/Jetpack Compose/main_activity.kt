package com.example.composearticle

import android.graphics.Paint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.semantics.Role.Companion.Image
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.composearticle.ui.theme.ComposeArticleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ComposeArticleTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    ArticleList("Jetpack Compose tutorial", getString(R.string.paragraph_one_text) , getString(
                                            R.string.paragraph_2_text) )
                }
            }
        }
    }
}

@Composable
fun ArticleList(header: String, paragraph1: String, paragraph2: String) {
    val image = painterResource(R.drawable.bg_compose_background)
    Box() {

        Column() {
            Image(
                painter = image,
                contentDescription = null,
                modifier = Modifier
                    .fillMaxWidth(),
            )
            Text(
                text = header,
                fontSize = 24.sp,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentWidth(Alignment.Start)
                    .padding(bottom = 16.dp,start = 16.dp, top = 16.dp  )
            )
            Text(
                text = paragraph1,
                modifier = Modifier
                    .wrapContentWidth(Alignment.Start)
                    .padding(start = 16.dp,  end = 16.dp),
                textAlign = TextAlign.Justify

                )
            Text(
                text = paragraph2,
                modifier = Modifier
                    .wrapContentWidth(Alignment.Start)
                    .padding(start = 16.dp, top = 16.dp, end = 16.dp),
                textAlign = TextAlign.Justify

                )

        }
    }
}

@Composable
fun Greeting() {

        Column(Modifier.fillMaxWidth()) {
            Row(Modifier.weight(1f)) {
                QudrantCard(header = "asdf", description = "rwerwer", background = Color.Yellow, modifier = Modifier.weight(1f))
                QudrantCard(header = "asdf", description = "rwerwer", background = Color.Cyan, modifier = Modifier.weight(1f))
            }
            Row(Modifier.weight(1f)) {
                QudrantCard(header = "asdf", description = "rwerwer", background = Color.Red, modifier = Modifier.weight(1f))
                QudrantCard(header = "asdf", description = "rwerwer", background = Color.Yellow, modifier = Modifier.weight(1f))

            }
        }


}

@Composable
fun QudrantCard(header: String, description: String, background: Color, modifier: Modifier = Modifier){
    Column(
        modifier = modifier
            .fillMaxSize()
            .background(background)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = header,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 16.dp)
        )
        Text(
            text = description,
            textAlign = TextAlign.Justify
        )
    }
}


@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    ComposeArticleTheme {
        ArticleList("Android","andsafasdf","apandfo kdsnfa oasdkf aosdfkasdf")
    }
}