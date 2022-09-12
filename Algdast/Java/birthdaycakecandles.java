    public static int birthdayCakeCandles(List<Integer> candles) {
        // Write your code here
            //get tallest number
            int maximov = Collections.max(candles);
            
            int freq = Collections.frequency(candles, maximov);
                    
            return freq;
            //System.out.println(maximov);
            //count tallest number occurence.
            
        }

